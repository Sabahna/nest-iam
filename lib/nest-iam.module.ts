import { DynamicModule, Global, Module } from "@nestjs/common";
import { IAMGuardModule } from "./guard/iam-guard.module";
import { AppModuleInterface } from "./interface/iam.module.interface";
import { NestIamCoreService } from "./nest-iam-service";
import { NestIamService } from "./nest-iam-service/nest-iam.service";

@Global()
@Module({})
export class NestIAMModule {
  static forRoot(options: AppModuleInterface): DynamicModule {
    return {
      module: NestIAMModule,
      imports: [IAMGuardModule],
      providers: [
        {
          provide: "IAM_OPTIONS",
          useValue: options,
        },
        NestIamService,
        NestIamCoreService,
      ],
      exports: [NestIamCoreService],
    };
  }
}
