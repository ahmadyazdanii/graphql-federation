import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class Comment {
  @Field(() => String)
  id: UUID;

  @Field(() => String)
  message: string;
}
