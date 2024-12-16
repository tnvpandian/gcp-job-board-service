import { Module } from '@nestjs/common';
import { JobsServiceController } from './jobs-service.controller';
import { JobsServiceService } from './jobs-service.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [JobsServiceController],
  providers: [JobsServiceService],
})
export class JobsServiceModule {}
