# nestjs-app-config-ts

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
