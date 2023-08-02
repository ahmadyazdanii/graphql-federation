import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  id: UUID;

  @Field(() => [Post])
  posts?: Post[];
}
