import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppointmentService } from './appointments.service';
import { AppointmentDTO } from './dto/appointment.dto';

@Resolver(() => AppointmentDTO)
export class AppointmentResolver {
  constructor(private readonly appointmentService: AppointmentService) { }

  @Query(() => [AppointmentDTO])
  async appointments() {
    return this.appointmentService.findAll();
  }

  @Mutation(() => AppointmentDTO)
  async addAppointment(
    @Args('customerName') customerName: string,
    @Args('serviceName') serviceName: string,
    @Args('appointmentTime') appointmentTime: Date,
    @Args('salonId') salonId: string,
  ) {
    return this.appointmentService.create({
      customerName,
      serviceName,
      appointmentTime,
      salonId,
    });
  }

  @Mutation(() => AppointmentDTO)
  async updateAppointment(
    @Args('id') id: string,
    @Args('customerName') customerName: string,
    @Args('serviceName') serviceName: string,
    @Args('appointmentTime') appointmentTime: Date,
  ) {
    return this.appointmentService.update(id, {
      customerName,
      serviceName,
      appointmentTime,
    });
  }

  @Mutation(() => AppointmentDTO)
  async deleteAppointment(@Args('id') id: string) {
    return this.appointmentService.delete(id);
  }
}
