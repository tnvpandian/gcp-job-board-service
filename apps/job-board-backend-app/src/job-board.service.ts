import { Injectable } from '@nestjs/common';
import { job_list } from './dummy-data/job-list';
import { company_list } from './dummy-data/company-list';

@Injectable()
export class JobBoardService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJobListDummyData() {
    const dummy_job_list = await job_list;
    return dummy_job_list;
  }

  async getCompaniesListDummyData() {
    const dummy_company_list = await company_list;
    return dummy_company_list;
  }
}
