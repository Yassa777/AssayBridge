import { ApolloServer } from '@apollo/server';
import { fastifyApolloHandler } from '@as-integrations/fastify';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

async function startApolloServer() {
  // Create Fastify app
  const app = Fastify();
  
  // Register CORS
  await app.register(cors, {
    origin: true // Enable CORS for all origins
  });

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: app.server })],
  });

  // Start the server
  await server.start();

  // Register Apollo handler
  app.route({
    url: '/graphql',
    method: ['POST', 'OPTIONS'],
    handler: fastifyApolloHandler(server)
  });

  // Start listening
  const PORT = parseInt(process.env.PORT || '4000', 10);
  try {
    await app.listen({ port: PORT });
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

startApolloServer().catch((err) => {
  console.error('Error starting server:', err);
}); 