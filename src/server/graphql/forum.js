import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Forum {
    messages: [Message]
    members: [User]
    id: ID!
    name: String
  }
`;

const resolvers = {
  Forum: {
    members(forum) {
      return []
    },
    messages(forum) {
      return []
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}