import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Comment } from './comment.entity';
import { UUID } from 'crypto';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: UUID;

  @Field(() => [Comment])
  comments?: Comment[];
}
