
import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'http://admin.swurgentcare.net/graphql',
  cache: new InMemoryCache(),
});