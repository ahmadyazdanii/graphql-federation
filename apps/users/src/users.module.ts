import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
  ApolloDriverConfig,
  ApolloDriver,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersRepository } from './users.repository';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
