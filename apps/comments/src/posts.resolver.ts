import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField(() => [Comment])
  comments(@Parent() post: Post): Comment[] {
    return this.commentsService.forPost(post.id);
  }
}
