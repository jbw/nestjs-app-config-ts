import { ConfigurationRoot } from "@app-config-ts/core/configuration-root";
import { DynamicModule, Global, Module } from "@nestjs/common";
import { AppConfigModuleOptions } from "./app-config-options";
import { createAppConfigProvider } from "./app-config-providers";

@Global()
@Module({})
export class AppConfigModule {
  static forRoot(options: AppConfigModuleOptions): DynamicModule {
    return {
      module: AppConfigModule,
      providers: [createAppConfigProvider(options)],
      exports: [ConfigurationRoot],
    };
  }
}
