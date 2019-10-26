import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Forum {
    messages: [Message]
    members: [User]
    id: ID!
    name: String
  }
`;

module.exports = {
  typeDef,
}