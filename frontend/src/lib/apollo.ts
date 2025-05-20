// src/lib/apollo.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';


export const apolloClient = new ApolloClient({
    link: new HttpLink({
      uri: import.meta.env.VITE_GRAPHQL_URL,   // use env var, not hard-coded string
    }),
    cache: new InMemoryCache(),
  });
  
