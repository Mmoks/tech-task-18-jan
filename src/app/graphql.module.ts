import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

import { environment } from 'src/environments/environment';

const uri = `https://${environment.host!}/graphql`;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const ws = new GraphQLWsLink(
    createClient({
      url: `wss://${environment.host!}/graphql`,
    })
  );
  const http = httpLink.create({ uri, withCredentials: true });

  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(
        query
      ) as OperationDefinitionNode;

      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    ws,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
