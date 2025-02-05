import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { SalonDTO } from './dto/salons.dto';

const prisma = new PrismaClient();

@Injectable()
export class SalonsService {

  async getAllSalons(): Promise<SalonDTO[]> {
    return prisma.salon.findMany();
  }
}