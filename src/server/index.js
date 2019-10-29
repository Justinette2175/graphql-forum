import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { PORT } from '../../config.json';

import { schema, context } from './graphql';

const server = new ApolloServer({
  schema,
  context,
});

const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
