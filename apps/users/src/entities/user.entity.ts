import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: UUID;

  @Field()
  full_name: string;

  @Field()
  email: string;
}
