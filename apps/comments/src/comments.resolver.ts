import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { UUID } from 'crypto';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation(() => Comment)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {
    return this.commentsService.create(createCommentInput);
  }

  @Query(() => [Comment], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Query(() => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => String }) id: UUID) {
    return this.commentsService.findOne(id);
  }

  @Mutation(() => Comment)
  updateComment(
    @Args('id', { type: () => String }) id: UUID,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return this.commentsService.update(id, updateCommentInput);
  }

  @Mutation(() => Comment)
  removeComment(@Args('id', { type: () => String }) id: UUID) {
    return this.commentsService.remove(id);
  }

  @ResolveField(() => User)
  user(@Parent() comment: Comment): any {
    return { __typename: 'User', id: comment.user_id };
  }

  @ResolveField(() => Post)
  post(@Parent() comment: Comment): any {
    return { __typename: 'Post', id: comment.post_id };
  }
}
