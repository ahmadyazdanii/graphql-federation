import { InputType, Field } from '@nestjs/graphql';
import { UUID } from 'crypto';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  user_id: UUID;
}
