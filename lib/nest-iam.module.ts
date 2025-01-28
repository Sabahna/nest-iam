import { DynamicModule, Global, Module } from "@nestjs/common";
import { AppModuleInterface } from "./interface/iam.module.interface";
import { NestIamCoreService } from "./nest-iam-service";
import { NestIamDbService } from "./nest-iam-service/nest-iam.db.service";

@Global()
@Module({})
export class NestIAMModule {
  static forRoot(options: AppModuleInterface): DynamicModule {
    return {
      module: NestIAMModule,
      providers: [
        {
          provide: "IAM_OPTIONS",
          useValue: options,
        },
        NestIamDbService,
        NestIamCoreService,
      ],
      exports: [NestIamCoreService],
    };
  }
}
