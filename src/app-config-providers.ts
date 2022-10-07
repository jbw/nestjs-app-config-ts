import { ConfigurationRoot } from "@app-config-ts/core/configuration-root";
import { Provider } from "@nestjs/common";
import { AppConfig } from "./app-config";
import { AppConfigModuleOptions } from "./app-config-options";

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
