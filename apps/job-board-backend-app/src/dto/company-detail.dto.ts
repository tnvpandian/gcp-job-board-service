import { ApiProperty } from '@nestjs/swagger';

export class CompanyDetail {
  id?: string;

  @ApiProperty({ default: 'Test Company' })
  name: string;

  @ApiProperty({ default: 'www.Sample.com' })
  website: string;

  @ApiProperty({ default: 'Test Company Description' })
  description: string;
}
