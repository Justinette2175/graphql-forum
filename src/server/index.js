import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { PORT } from '../../config.json';

import { schema } from './graphql/schema';

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
});
