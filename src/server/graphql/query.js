import { gql } from 'apollo-server-express';

import ForumsManager from '../dataUtils/ForumsManager';
import UsersManager from '../dataUtils/UsersManager';

const typeDef =  gql`
  type Query {
    forums: [Forum]
    forum(id: String!): Forum
    user(id: String!): User
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
  },
};

module.exports = {
  typeDef, 
  resolvers,
}