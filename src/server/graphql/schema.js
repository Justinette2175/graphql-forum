import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDef as User } from './user';
import { typeDef as Forum } from './forum';
import { typeDef as Message } from './message';

const Query =  gql`
  type Query {
    forums: [Forum]
    forum(id: String!): Forum
    user(id: String!): User
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ Query, User, Forum, Message ],
  resolvers: {},
});

module.exports = { schema }