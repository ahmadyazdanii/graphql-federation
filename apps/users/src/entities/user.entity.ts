import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class User {
  @Field(() => String)
  id: UUID;

  @Field(() => String)
  full_name: string;

  @Field(() => String)
  email: string;
}
