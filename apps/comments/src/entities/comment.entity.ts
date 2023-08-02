import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { User } from './user.entity';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Comment {
  @Field(() => ID)
  id: UUID;

  @Field()
  message: string;

  @Field()
  user_id: UUID;

  @Field()
  post_id: UUID;

  @Field(() => User)
  user?: User;

  @Field(() => Post)
  post?: Post;
}
