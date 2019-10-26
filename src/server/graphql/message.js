import { gql } from 'apollo-server-express';

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
      return getUser({ id: message.writtenBy });
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}