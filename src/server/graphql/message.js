import { gql } from 'apollo-server-express';

const typeDef = gql`
  type Message {
    writtenBy: User!
    text: String!
    timestamp: String!
    id: ID!
  }
`;

module.exports = {
  typeDef,
}