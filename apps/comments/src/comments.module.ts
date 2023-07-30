import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
  ApolloDriverConfig,
  ApolloDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CommentsRepository } from './comments.repository';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [CommentsResolver, CommentsService, CommentsRepository],
})
export class CommentsModule {}
