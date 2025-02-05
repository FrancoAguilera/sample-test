import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SalonDTO {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  location: string;
}