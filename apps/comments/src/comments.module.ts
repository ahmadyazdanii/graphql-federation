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

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [CommentsResolver, CommentsService],
})
export class CommentsModule {}
