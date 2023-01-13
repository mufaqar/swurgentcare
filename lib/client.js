
import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  uri: 'https://admin.swurgentcare.net/graphql',
  cache: new InMemoryCache(),
});