import { ObjectType, Field } from '@nestjs/graphql';
import { SalonDTO } from '../../salons/dto/salons.dto';

@ObjectType()
export class AppointmentDTO {
  @Field()
  id: string;

  @Field()
  customerName: string;

  @Field()
  serviceName: string;

  @Field()
  appointmentTime: Date;

  @Field(() => SalonDTO)
  salon: SalonDTO;
}