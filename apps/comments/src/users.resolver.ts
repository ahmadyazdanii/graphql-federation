import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { User } from './entities/user.entity';
import { Comment } from './entities/comment.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @ResolveField(() => [Comment])
  comments(@Parent() user: User): Comment[] {
    return this.commentsService.forUser(user.id);
  }
}
