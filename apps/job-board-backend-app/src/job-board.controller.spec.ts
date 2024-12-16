import { Test, TestingModule } from '@nestjs/testing';
import { JobBoardController } from './job-board.controller';
import { JobBoardService } from './job-board.service';

describe('JobBoardAppController', () => {
  let appController: JobBoardController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [JobBoardController],
      providers: [JobBoardService],
    }).compile();

    appController = app.get<JobBoardController>(JobBoardController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
