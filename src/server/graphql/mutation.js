import { gql } from 'apollo-server-express';

import { ForumsManager, MessagesManager } from '../dataManagers';
import ErrorHandler from '../utils/ErrorHandler';

const typeDef =  gql`
  type Mutation {
    joinForum(forumId: String!): Forum
    createForum(name: String!): Forum
    postMessage(text: String!, forumId: String!): Message
  }
`;

const resolvers = {
  Mutation: {
    joinForum: (_, { forumId }, { user }) => {
      return ErrorHandler.throwIfNoUser(user, () => ForumsManager.addMemberToForum({ forumId, userId: user.id }));
    },
    createForum: (_, { name }, { user }) => {
      return ErrorHandler.throwIfNoUser(user, () => ForumsManager.createForum({ name, userId: user.id }));
    },
    postMessage: (_, { text, forumId }, { user }) => {
      return ErrorHandler.throwIfNoUser(user, () => MessagesManager.createMessage({ text, forumId, userId: user.id }));
    },
  },
};

module.exports = {
  typeDef, 
  resolvers,
}