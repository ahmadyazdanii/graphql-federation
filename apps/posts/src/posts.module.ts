import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsRepository } from './posts.repository';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
  ],
  providers: [PostsResolver, UsersResolver, PostsService, PostsRepository],
})
export class PostsModule {}
