import { gql } from 'apollo-server-express';

import { UsersManager } from '../dataManagers';

const typeDef = gql`
  type Message {
    writtenBy: User!
    text: String!
    timestamp: String!
    id: ID!
  }
`;

const resolvers = {
  Message: {
    writtenBy(message) {
      return UsersManager.getUser({ userId: message.writtenBy });
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}