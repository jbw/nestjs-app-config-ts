import { Controller, Get, Inject } from "@nestjs/common";
import { AppConfig } from "../src/app-config-ts.module";
import { ConfigurationRoot } from "@app-config-ts/core/configuration-root";

@Controller()
export class AppController {
  config: ConfigurationRoot;

  constructor(config: ConfigurationRoot) {
    this.config = config;
  }

  @Get()
  getName(): string | null {
    return this.config.get("name");
  }
}
