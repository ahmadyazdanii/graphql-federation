import { InputType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@InputType()
export class CreateCommentInput {
  @Field(() => String)
  message: string;
}
