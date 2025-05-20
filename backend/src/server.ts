// src/server.ts
import Fastify from 'fastify';
import ddpcrRoutes from './routes/ddpcr.js';
import cors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import fastifyApollo from '@as-integrations/fastify';
import { typeDefs } from './graphQL/schema.js';
import { resolvers } from './graphQL/resolvers.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = Fastify({ logger: true });

const PORT = parseInt(process.env.PORT || '3000', 10);
const HOST = process.env.HOST || '0.0.0.0'; // Render typically uses 0.0.0.0

async function main() {
  // enable CORS
  await app.register(cors, { 
    origin: process.env.CORS_ORIGIN || '*', // Make CORS origin configurable
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  });

  // register routes
  // await app.register(ddpcrRoutes, { prefix: '/api/ddpcr' }); // Commented out prefixed version
  await app.register(ddpcrRoutes); // Registering without prefix

  const apollo = new ApolloServer({ typeDefs, resolvers });
  await apollo.start();
  await app.register(fastifyApollo(apollo), { prefix: '/graphql' });

  try {
    await app.listen({ port: PORT, host: HOST });
    app.log.info(`🚀 Server running at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}`);
    app.log.info(`🚀 GraphQL ready at http://${HOST === '0.0.0.0' ? 'localhost' : HOST}:${PORT}/graphql`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
