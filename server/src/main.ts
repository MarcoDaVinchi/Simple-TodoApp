import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins = [
    'http://localhost',
    'https://localhost',
    'http://localhost:3000',
    'https://magulaev.site',
    '*',
  ];

  const cors = {
    origin: allowedOrigins,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
  };

  app.use(helmet());
  app.enableCors(cors);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
