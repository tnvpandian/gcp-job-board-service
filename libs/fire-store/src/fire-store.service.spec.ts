import { Test, TestingModule } from '@nestjs/testing';
import { FireStoreService } from './fire-store.service';

describe('FireStoreService', () => {
  let service: FireStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FireStoreService],
    }).compile();

    service = module.get<FireStoreService>(FireStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
