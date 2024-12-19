import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AppModule } from './job-board.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_BASE_PATH, SWAGGER_PATH } from './constants/job-board-constants';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix(APP_BASE_PATH);
  const config = new DocumentBuilder()
    .setTitle('Job Board Micro Service')
    .setDescription('Job Board Details and Management Micrservice')
    .setVersion('1.0')
    .addTag('Job Board')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(APP_BASE_PATH + SWAGGER_PATH, app, documentFactory);
  app.useLogger(app.get(Logger));

  await app.listen(process.env.JOB_BOARD_PORT, '0.0.0.0');
}
bootstrap();
