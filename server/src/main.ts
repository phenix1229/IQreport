import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
  ));
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT');
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  // app.enableCors();
  // app.enableCors({
  //   allowedHeaders:['Access-Control-Allow-Origin','http://localhost:5173/'],
  //   exposedHeaders:['Access-Control-Allow-Origin'],
  //   origin:'http://localhost:5173/',
  //   // origin:'*',
  //   methods: 'GET, POST, PATCH, PUT, HEAD',
  //   credentials:true,
  // });
  app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173/');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  await app.listen(port);
}

bootstrap();
