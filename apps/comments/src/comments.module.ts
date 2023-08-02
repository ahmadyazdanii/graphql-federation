import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CommentsRepository } from './comments.repository';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [User, Post],
      },
    }),
  ],
  providers: [
    CommentsResolver,
    PostsResolver,
    UsersResolver,
    CommentsService,
    CommentsRepository,
  ],
})
export class CommentsModule {}
