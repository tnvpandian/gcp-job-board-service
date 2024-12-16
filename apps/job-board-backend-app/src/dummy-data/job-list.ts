import { JobDetail } from '../dto/job-detail.dto';

export const job_list: JobDetail[] = [
  {
    id: 'J1001',
    name: 'Full Stack developer',
    description: 'We need someone to code frontend and backend applications',
    company_id: 'C1001',
    posted_on: new Date('2024-12-14'),
    posted_by: 'AdminUser1',
  },
  {
    id: 'J1002',
    name: 'DevOps Engineer',
    description: 'We need help to setup pipelines and deploy application',
    company_id: 'C10002',
    posted_on: new Date('2024-12-15'),
    posted_by: 'AdminUser2',
  },
  {
    id: 'J1003',
    name: 'Architect',
    description: 'We need Architects to design systems',
    company_id: 'C10003',
    posted_on: new Date('2024-12-16'),
    posted_by: 'AdminUser3',
  },
];
