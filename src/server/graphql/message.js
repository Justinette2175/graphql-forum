import { gql } from 'apollo-server-express';

import { UsersManager } from '../dataManagers';

import { TimeUtils } from '../utils';

const typeDef = gql`
  type Message {
    writtenBy: User!
    text: String!
    timestamp(format: TimeFormat): String!
    id: ID!
  }
`;

const resolvers = {
  Message: {
    writtenBy(message) {
      return UsersManager.getUser({ userId: message.writtenBy });
    },
    timestamp(message, { format }) {
      return TimeUtils.formatTime(message.timestamp, format);
    }
  },
}

module.exports = {
  typeDef,
  resolvers,
}