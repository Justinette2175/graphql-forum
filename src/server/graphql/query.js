import { gql } from 'apollo-server-express';

import { ForumsManager, UsersManager } from '../dataManagers';

const typeDef =  gql`
  type Query {
    forums: [Forum]
    forum(id: String!): Forum
    user(id: String!): User
    users: [User]
  }
`;

const resolvers = {
  Query: { 
    forums: () => ForumsManager.getForums(),
    forum: (_, { id }) => {
      return ForumsManager.getForum({ forumId: id });
    },
    user: (_, { id }) => {
      return UsersManager.getUser({ userId: id });
    },
    users: () => UsersManager.getUsers(),
  },
};

module.exports = {
  typeDef, 
  resolvers,
}