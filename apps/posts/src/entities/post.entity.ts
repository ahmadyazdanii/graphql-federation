import { ObjectType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@ObjectType()
export class Post {
  @Field(() => String)
  id: UUID;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;
}
