import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppConfigModule } from "../src";

@Module({
  imports: [
    AppConfigModule.forRoot({
      basePath: "./example",
      configFilename: "appconfig.json",
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
