import { Resolver, Query } from '@nestjs/graphql';
import { SalonsService } from './salons.service';
import { SalonDTO } from './dto/salons.dto';

@Resolver(() => SalonDTO)
export class SalonsResolver {
  constructor(private readonly salonsService: SalonsService) { }

  @Query(() => [SalonDTO])
  async salons(): Promise<SalonDTO[]> {
    return this.salonsService.getAllSalons();
  }
}