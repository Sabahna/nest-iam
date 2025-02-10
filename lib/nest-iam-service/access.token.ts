import { UnauthorizedException } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

export const generateToken = (
  jwtSecretKey: string,
  data: object,
  expires = "30d",
): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
  return jwt.sign(data, jwtSecretKey, {
    expiresIn: expires,
  });
};

/**
 *
 * @returns If the token is valid, this method will return `string | jwt.JwtPayload`
 * @returns If the token is expired, this method will `throw an error`
 */
export const verifyToken = (options: {
  jwtSecretKey: string;
  token: string;
  expiredMessage?: string;
  invalidMessage?: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
}): string | jwt.JwtPayload => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    return jwt.verify(options.token, options.jwtSecretKey);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedException(
        options.expiredMessage ?? "Token expired",
      );
    }

    throw new UnauthorizedException(options.invalidMessage ?? "Invalid token");
  }
};
