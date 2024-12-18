import { Injectable } from '@nestjs/common';
import { job_list } from './dummy-data/job-list';
import { company_list } from './dummy-data/company-list';
import { skill_set_list } from './dummy-data/skill-set-list';

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

  async getSkillSetsDummyData() {
    const dummy_skill_sets = await skill_set_list;
    return dummy_skill_sets;
  }

}
