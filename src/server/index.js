import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import { PORT } from '../../config.json';

const typeDefs = gql`
  type User {
    userName: String
    avatar: String
    id: ID!
  }
  type Query {
    user(id: String!): User
  }
`;

const resolvers = {
  Query: {
    user: (parent, { id }) => {
      return {
        userName: 'John', 
        avatar: 'https://api.adorable.io/avatars/70/john@adorable.io.png',
        id: '1',
      }
    },
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
});
