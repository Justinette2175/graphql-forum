import { gql } from 'apollo-server-express';

import { ForumsManager, MessagesManager } from '../dataManagers';

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
      return ForumsManager.addMemberToForum({ forumId, userId: user.id });
    },
    createForum: (_, { name }, { user }) => {
      return ForumsManager.createForum({ name, userId: user.id });
    },
    postMessage: (_, { text, forumId }, { user }) => {
      return MessagesManager.createMessage({ text, forumId, userId: user.id });
    },
  },
};

module.exports = {
  typeDef, 
  resolvers,
}