import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { UUID } from 'crypto';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: UUID;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  user_id: UUID;

  @Field(() => User)
  user?: User;
}
