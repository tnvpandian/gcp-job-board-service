import { Module } from '@nestjs/common';
import { JobBoardController } from './job-board.controller';
import { JobBoardService } from './job-board.service';
import { ConfigService } from '@nestjs/config';
import { GlobalModule, FireStoreService } from '@app/global';

@Module({
  imports: [GlobalModule],
  controllers: [JobBoardController],
  providers: [JobBoardService, FireStoreService, ConfigService],
})
export class AppModule {}
