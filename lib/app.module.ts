import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class NestIAMModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: NestIAMModule,
      providers: [
        {
          provide: "LOGGER_OPTIONS",
          useValue: options,
        },
        // Service,
      ],
      exports: [],
    };
  }
}
