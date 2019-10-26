import { gql } from 'apollo-server-express';

const typeDef = gql`
  type User {
    userName: String
    avatar: String
    forums: [Forum]
    id: ID!
  }
`;

const resolvers = {
  User: {
    forums(user) {
      return getUserForums({ id: user.id });
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}