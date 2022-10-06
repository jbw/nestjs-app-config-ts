import { ConfigurationBuilder } from "@app-config-ts/core/configuration-builder";
import { IConfigurationRoot } from "@app-config-ts/core/configuration-root.interface";
import { JsonConfigurationSource } from "@app-config-ts/json";
import {
  DynamicModule,
  Global,
  Injectable,
  Module,
  Provider,
} from "@nestjs/common";

export interface AppConfigModuleOptions {
  basePath: string;
  configFilename: string;
}

@Injectable()
export class AppConfig {
  public config: IConfigurationRoot;

  constructor(options: AppConfigModuleOptions) {
    console.warn(options);
    this.config = new ConfigurationBuilder()
      .setBasePath(options.basePath)
      .addEnvironmentVariables()
      .add(new JsonConfigurationSource(options.configFilename))
      .build();
  }
}

@Global()
@Module({})
export class AppConfigModule {
  static forRoot(options: AppConfigModuleOptions): DynamicModule {
    const configProvider: Provider = {
      provide: AppConfig,
      useFactory: () => {
        return new AppConfig(options);
      },
    };

    return {
      module: AppConfigModule,
      providers: [configProvider],
      exports: [configProvider],
    };
  }
}
