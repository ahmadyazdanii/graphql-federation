import { InputType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@InputType()
export class CreateCommentInput {
  @Field()
  message: string;

  @Field()
  user_id: UUID;

  @Field()
  post_id: UUID;
}
