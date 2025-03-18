import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response } from "express";
import { NestIamCoreService } from "../nest-iam-service";
import { verifyToken } from "../nest-iam-service/access.token";
import { NestIamService } from "../nest-iam-service/nest-iam.service";

@Injectable()
export class RefreshTokenGuard implements CanActivate {
  constructor(
    private readonly service: NestIamService,
    private readonly coreService: NestIamCoreService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest() as Request;
    const res = context.switchToHttp().getRequest() as Response;

    // console.log(
    //   "Request Details:",
    //   util.inspect(req, { depth: 2, colors: true }),
    // );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = req.cookies?.jwtToken as string | undefined;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const refreshToken = req.cookies?.refreshToken as string | undefined;

    if (!token || !refreshToken) {
      throw new UnauthorizedException("You are not authenticated.");
    }

    const verificationToken = verifyToken({
      jwtSecretKey: this.service.configMaps.secret,
      token: refreshToken,
      expiredMessage: this.service.configMaps.tokenExpiredMessage,
      invalidMessage: this.service.configMaps.tokenInvalidMessage,
    }) as { sid: string; uid: string };

    const validSession = await this.coreService.checkSession(
      verificationToken.sid,
    );
    if (!validSession) {
      throw new UnauthorizedException("Invalid session!");
    }

    return true;
  }
}
