// src/server.ts
import Fastify from 'fastify';
import ddpcrRoutes from './routes/ddpcr';
import cors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import fastifyApollo from '@as-integrations/fastify';
import { typeDefs } from './graphQL/schema';
import { resolvers } from './graphQL/resolvers';

const app = Fastify({ logger: true });
// enable CORS
app.register(cors, { 
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// register routes
app.register(ddpcrRoutes, { prefix: '/api/ddpcr' });

const apollo = new ApolloServer({ typeDefs, resolvers });
await apollo.start();
app.register(fastifyApollo(apollo), { prefix: '/graphql' });

await app.listen({ port: 3000 });
console.log('graphql ready at http://localhost:3000/graphql');




const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('🚀 Server running at http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
