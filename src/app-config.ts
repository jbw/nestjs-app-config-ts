import { ConfigurationBuilder } from '@app-config-ts/core/configuration-builder';
import { ConfigurationRoot } from '@app-config-ts/core/configuration-root';
import { JsonConfigurationSource } from '@app-config-ts/json';
import { AppConfigModuleOptions } from './app-config-options';

export class AppConfig {
  static init(options: AppConfigModuleOptions): ConfigurationRoot {
    return new ConfigurationBuilder()
      .setBasePath(options.baseDir)
      .addEnvironmentVariables()
      .add(new JsonConfigurationSource(options.configFilename))
      .build();
  }
}
