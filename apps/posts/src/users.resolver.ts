import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User): Post[] {
    return this.postsService.forUser(user.id);
  }
}
