import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import context from './graphql/context';

import { PORT } from '../../config.json';

import schema from './graphql';

const server = new ApolloServer({
  schema,
  context,
});

const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
});
