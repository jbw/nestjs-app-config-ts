import { Controller, Get, Inject } from "@nestjs/common";
import { AppConfig } from "../src/app-config-ts.module";
import { IConfigurationRoot } from "@app-config-ts/core/configuration-root.interface";

@Controller()
export class AppController {
  config: IConfigurationRoot;

  constructor(
    @Inject(AppConfig)
    appConfig: AppConfig
  ) {
    this.config = appConfig.config;
  }

  @Get()
  getName(): string | null {
    return this.config.get("name");
  }
}
