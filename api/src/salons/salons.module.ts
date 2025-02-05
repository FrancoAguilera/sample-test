import { Module } from '@nestjs/common';
import { SalonsService } from './salons.service';
import { SalonsResolver } from './salons.resolver';

@Module({
  providers: [SalonsService, SalonsResolver]
})
export class SalonsModule {}
