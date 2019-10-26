import { gql } from 'apollo-server-express';

import UsersManager from '../dataUtils/UsersManager';

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
      return UsersManager.getUserForums({ userId: user.id });
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}