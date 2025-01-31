import { Module } from "@nestjs/common";
import { APP_GUARD, Reflector } from "@nestjs/core";
import IAMGuard from "./iam-guard";

@Module({
  providers: [
    Reflector,
    {
      provide: APP_GUARD,
      useClass: IAMGuard,
    },
  ],
})
export class IAMGuardModule {}
