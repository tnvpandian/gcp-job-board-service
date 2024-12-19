import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JobBoardService } from './job-board.service';
import { CompanyDetail } from './dto/company-detail.dto';
import { ApiParam } from '@nestjs/swagger';

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
  async getCompaniesListDummyData(): Promise<CompanyDetail[]> {
    return await this.appService.getCompaniesList();
  }

  @Get('/company/:id')
  @ApiParam({ name: 'id', required: true, type: 'string' })
  async getCompanyDetail(@Param('id') doc_id: any): Promise<any> {
    return await this.appService.getCompany(doc_id);
  }

  @Get('/company/delete/:id')
  @ApiParam({ name: 'id', required: true, type: 'string' })
  async deleteCompanyDetail(@Param('id') doc_id: any): Promise<any> {
    return await this.appService.deleteCompany(doc_id);
  }

  @Post('/company/create')
  async createCompany(@Body() new_company: CompanyDetail): Promise<any> {
    /*
    const companyDetail: CompanyDetail = {
      name: 'Amazon Web Services (AWS)',
      description: 'Leading provider in Cloud',
      website: 'https://aws.amazon.com/',
    };
    */

    return await this.appService.createCompany(new_company);
  }

  @Get('skill-set-list')
  async getSkillSetsDummyData() {
    return await this.appService.getSkillSetsDummyData();
  }
}
