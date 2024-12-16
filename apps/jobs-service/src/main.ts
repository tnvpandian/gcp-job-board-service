import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { JobsServiceModule } from './jobs-service.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_BASE_PATH, SWAGGER_PATH } from './constants/jobs-constants';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    JobsServiceModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix(APP_BASE_PATH);
  const config = new DocumentBuilder()
    .setTitle('Jobs Micro Service')
    .setDescription('Job Details and Management Microservice')
    .setVersion('1.0')
    .addTag('Job List & Details Management')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(APP_BASE_PATH + SWAGGER_PATH, app, documentFactory);

  await app.listen(process.env.JOBS_PORT, '0.0.0.0');
}
bootstrap();
