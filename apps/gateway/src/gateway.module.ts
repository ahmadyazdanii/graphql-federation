import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriverConfig, ApolloGatewayDriver } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'users', url: 'http://user-service:3000/graphql' },
            { name: 'posts', url: 'http://post-service:3000/graphql' },
            { name: 'comments', url: 'http://comment-service:3000/graphql' },
          ],
        }),
      },
    }),
  ],
})
export class GatewayModule {}
