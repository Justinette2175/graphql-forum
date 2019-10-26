import { gql } from 'apollo-server-express';

import { ForumsManager } from '../dataManagers';

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
      return ForumsManager.getMembersInForum({ forumId: forum.id });
    },
    messages(forum) {
      return ForumsManager.getMessagesInForum({ forumId: forum.id });
    },
  },
}

module.exports = {
  typeDef,
  resolvers,
}