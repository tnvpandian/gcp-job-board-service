import { Injectable } from '@nestjs/common';
import { job_list } from './dummy-data/job-list';
import { skill_set_list } from './dummy-data/skill-set-list';
import { FireStoreService } from '@app/global';
import { CompanyDetail } from './dto/company-detail.dto';
import { ConfigService } from '@nestjs/config';
import { FIRE_STORE_COLLECTION_COMPANY } from './constants/job-board-constants';

import { Logger } from 'nestjs-pino';

@Injectable()
export class JobBoardService {
  constructor(
    private readonly firestoreService: FireStoreService,
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {
    this.logger.log('Job Board Service Instantiated');
  }

  COMPANY_COLLECTION_NAME = this.configService.get<string>(
    FIRE_STORE_COLLECTION_COMPANY,
  );

  getHello(): string {
    return 'Hello World!';
  }

  async getJobListDummyData() {
    this.logger.log('Job Board Service getJobListDummyData');

    const dummy_job_list = await job_list;
    return dummy_job_list;
  }

  async getCompaniesList(): Promise<CompanyDetail[]> {
    //const dummy_company_list = await company_list;
    //return dummy_company_list;
    this.logger.log('Job Board Service getCompaniesList');

    const company_list = await this.firestoreService.getDocuments(
      this.COMPANY_COLLECTION_NAME,
    );
    return company_list;
  }

  async getCompany(doc_id: string): Promise<any> {
    this.logger.log('Job Board Service getCompany', { doc_id });

    const company_list = await this.firestoreService.getDocument(
      this.COMPANY_COLLECTION_NAME,
      doc_id,
    );
    return company_list;
  }

  async createCompany(company: CompanyDetail): Promise<any> {
    this.logger.log('Job Board Service createCompany', { company });
    const created_company_id = await this.firestoreService.createDocument(
      this.COMPANY_COLLECTION_NAME,
      company,
    );
    return created_company_id;
  }

  async deleteCompany(doc_id: string): Promise<any> {
    this.logger.log('Job Board Service deleteCompany', { doc_id });

    const company_deleted = await this.firestoreService.deleteDocument(
      this.COMPANY_COLLECTION_NAME,
      doc_id,
    );
    return company_deleted;
  }

  async getSkillSetsDummyData() {
    this.logger.log('Job Board Service getSkillSetsDummyData');

    const dummy_skill_sets = await skill_set_list;
    return dummy_skill_sets;
  }
}
