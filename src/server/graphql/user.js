import { gql } from 'apollo-server-express';

const typeDef = gql`
  type User {
    userName: String
    avatar: String
    forums: [Forum]
    id: ID!
  }
`;

module.exports = {
  typeDef,
}