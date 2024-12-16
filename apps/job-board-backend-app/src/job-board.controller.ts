import { Controller, Get } from '@nestjs/common';
import { JobBoardService } from './job-board.service';

@Controller()
export class JobBoardController {
  constructor(private readonly appService: JobBoardService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('jobs-list')
  async getJobListDummyData() {
    return await this.appService.getJobListDummyData();
  }

  @Get('companies-list')
  async getCompaniesListDummyData() {
    return await this.appService.getCompaniesListDummyData();
  }
}
