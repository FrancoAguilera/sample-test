import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { PrismaClient } from '@prisma/client';
import { AppointmentsModule } from './appointments/appointments.module';
import { SalonsModule } from './salons/salons.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AppointmentsModule,
    SalonsModule,
  ],
  providers: [AppResolver, PrismaClient],
})
export class AppModule { }
