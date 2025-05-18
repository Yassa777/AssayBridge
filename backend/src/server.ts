// src/server.ts
import Fastify from 'fastify';
import ddpcrRoutes from './routes/ddpcr';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

// enable CORS
app.register(cors, { 
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
});

// register routes
app.register(ddpcrRoutes, { prefix: '/api/ddpcr' });

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
