import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { NestIamCoreService } from "../nest-iam-service";

@Injectable()
export class IAMMiddleware implements NestMiddleware {
  constructor(private readonly nestIamCoreService: NestIamCoreService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // console.log(
    //   "Request Details:",
    //   util.inspect(req, { depth: 2, colors: true }),
    // );

    const token = req.cookies?.jwtToken;
    const refreshToken = req.cookies?.refreshToken;

    const oneDay = 1000 * 60 * 60 * 24;

    // 🔹 Set Cookies (Secure options recommended)
    res.cookie("jwtToken", "your-jwt-token", {
      httpOnly: true, // Prevents client-side access (XSS protection)
      secure: false, // Set `true` in production with HTTPS
      maxAge: oneDay, // 1 day expiration
    });

    res.cookie("refreshToken", "your-refresh-token", {
      httpOnly: true,
      secure: false,
      maxAge: oneDay * 7, // 7 days expiration
    });

    next();
  }
}
