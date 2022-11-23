# nestjs-app-config-ts

See [app-config-ts](https://github.com/jbw/app-config-ts)

## Getting Started

```sh
npm install --save @app-config-ts/nestjs
```

## Usage

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppConfigModule } from '@app-config-ts/nestjs';

@Module({
  imports: [
    AppConfigModule.forRoot({
      configFilename: 'appconfig.json',
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

```ts
import { Controller, Get } from '@nestjs/common';
import { ConfigurationRoot } from '@app-config-ts/core/configuration-root';

@Controller()
export class AppController {
  config: ConfigurationRoot;

  constructor(config: ConfigurationRoot) {
    this.config = config;
  }

  @Get()
  getName(): string | null {
    return this.config.get('name');
  }
}
```
