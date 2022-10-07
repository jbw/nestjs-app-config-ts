import { ConfigurationBuilder } from "@app-config-ts/core/configuration-builder";
import { ConfigurationRoot } from "@app-config-ts/core/configuration-root";
import { JsonConfigurationSource } from "@app-config-ts/json";
import { DynamicModule, Global, Module, Provider } from "@nestjs/common";

export interface AppConfigModuleOptions {
  baseDir: string;
  configFilename: string;
}

export class AppConfig {
  static init(options: AppConfigModuleOptions): ConfigurationRoot {
    return new ConfigurationBuilder()
      .setBasePath(options.baseDir)
      .addEnvironmentVariables()
      .add(new JsonConfigurationSource(options.configFilename))
      .build();
  }
}

export function createAppConfigProvider(
  options: AppConfigModuleOptions
): Provider {
  return {
    provide: ConfigurationRoot,
    useFactory: () => {
      return AppConfig.init(options);
    },
  };
}

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
