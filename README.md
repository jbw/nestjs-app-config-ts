# nestjs-app-config-ts

## Getting Started

```sh
npm install --save @app-config-ts/nestjs
```

## Usage

```ts
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
