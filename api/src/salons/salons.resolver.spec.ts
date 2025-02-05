import { Test, TestingModule } from '@nestjs/testing';
import { SalonsResolver } from './salons.resolver';

describe('SalonsResolver', () => {
  let resolver: SalonsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalonsResolver],
    }).compile();

    resolver = module.get<SalonsResolver>(SalonsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
