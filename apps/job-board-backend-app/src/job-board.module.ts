import { Module } from '@nestjs/common';
import { JobBoardController } from './job-board.controller';
import { JobBoardService } from './job-board.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [JobBoardController],
  providers: [JobBoardService],
})
export class AppModule {}
