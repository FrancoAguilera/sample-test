import { Module } from '@nestjs/common';
import { AppointmentService } from './appointments.service';
import { AppointmentResolver } from './appointments.resolver';

@Module({
  providers: [AppointmentService, AppointmentResolver]
})
export class AppointmentsModule { }
