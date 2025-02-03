import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request, Response } from "express";
import { NestIamCoreService } from "../nest-iam-service";
import { verifyToken } from "../nest-iam-service/access.token";
import { NestIamService } from "../nest-iam-service/nest-iam.service";
import { ScopeOptions } from "./metadata";

export function checkPublicState(
  reflector: Reflector,
  context: ExecutionContext,
): boolean {
  // Check for method
  const guard: null | boolean = reflector.get("public", context.getHandler());

  if (guard == null) {
    // Check for controller
    const guardClass: null | boolean = reflector.get(
      "public",
      context.getClass(),
    );

    if (guardClass == null) {
      return false;
    }
    return guardClass;
  }
  return guard;
}

@Injectable()
export default class IAMGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly service: NestIamService,
    private readonly coreService: NestIamCoreService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest() as Request;
    const res = context.switchToHttp().getRequest() as Response;

    // --------------- Check For Public or Authenticated User ---------------
    const isPublic = checkPublicState(this.reflector, context);

    if (isPublic) {
      return true;
    } else {
      // console.log(
      //   "Request Details:",
      //   util.inspect(req, { depth: 2, colors: true }),
      // );

      const token: string | undefined = req.cookies?.jwtToken;
      const refreshToken: string | undefined = req.cookies?.refreshToken;

      if (!token || !refreshToken) {
        throw new UnauthorizedException("You are not authenticated.");
      }

      const resource: null | string = this.reflector.get(
        "resource",
        context.getClass(),
      );
      if (resource == null) {
        throw new InternalServerErrorException("Resource Not Found");
      }

      const scope: null | ScopeOptions = this.reflector.get(
        "scope",
        context.getHandler(),
      );
      if (scope == null) {
        throw new InternalServerErrorException("Scope Not Found");
      }

      const verificationToken = verifyToken({
        jwtSecretKey: this.service.configMaps.secret,
        token: token,
        expiredMessage: this.service.configMaps.tokenExpiredMessage,
        invalidMessage: this.service.configMaps.tokenInvalidMessage,
      }) as { sid: string; uid: string };

      const uuid = scope.uuid?.(req);

      const userRole = (
        await this.coreService.getUserRole(verificationToken.uid, uuid)
      )?.roles[0];

      if (userRole == undefined) {
        throw new ForbiddenException("You are not authorized.");
      }

      const rolePermission: { [key: string]: string[] } | undefined = (
        await this.coreService.getRoleById(userRole.role.id, userRole.role.uuid)
      )?.permissions.reduce((acc, { resource, scope }) => {
        if (!acc[resource.name]) {
          acc[resource.name] = [];
        }
        acc[resource.name].push(scope.name);
        return acc;
      }, {});

      if (rolePermission == undefined) {
        throw new ForbiddenException("You are not authorized.");
      }

      if (
        Object.keys(rolePermission).includes(resource) &&
        rolePermission[resource].includes(scope.name)
      ) {
        return true;
      } else {
        throw new ForbiddenException("You are not authorized.");
      }
    }
  }
}
