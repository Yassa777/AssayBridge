// src/server.ts
import Fastify from 'fastify';
import ddpcrRoutes from './routes/ddpcr.js';
import cors from '@fastify/cors';
import { ApolloServer } from '@apollo/server';
import fastifyApollo from '@as-integrations/fastify';
import { typeDefs } from './graphQL/schema.js';
import { resolvers } from './graphQL/resolvers.js';
const app = Fastify({ logger: true });
async function main() {
    // enable CORS
    await app.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    });
    // register routes
    // await app.register(ddpcrRoutes, { prefix: '/api/ddpcr' }); // Commented out prefixed version
    await app.register(ddpcrRoutes); // Registering without prefix
    const apollo = new ApolloServer({ typeDefs, resolvers });
    await apollo.start();
    await app.register(fastifyApollo(apollo), { prefix: '/graphql' });
    try {
        await app.listen({ port: 3000 });
        app.log.info(`🚀 Server running at http://localhost:3000`);
        app.log.info(`🚀 GraphQL ready at http://localhost:3000/graphql`);
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
main();
