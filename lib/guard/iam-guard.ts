import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request, Response } from "express";
import { NestIamCoreService } from "../nest-iam-service";

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
    private readonly nestIamCoreService: NestIamCoreService,
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

      const token = req.cookies?.jwtToken;
      const refreshToken = req.cookies?.refreshToken;

      if (!token || !refreshToken) {
        throw new UnauthorizedException("You are not authenticated.");
      }

      console.log(token);
      console.log(refreshToken);

      return true;
    }
  }
}
