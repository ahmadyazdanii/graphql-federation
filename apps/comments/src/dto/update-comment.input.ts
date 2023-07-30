import { CreateCommentInput } from './create-comment.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCommentInput extends PartialType(CreateCommentInput) {}
