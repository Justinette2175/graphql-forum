import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';

import {
  typeDef as User, 
  resolvers as UserResolvers
} from './user';

import {
  typeDef as Forum,
  resolvers as ForumResolvers
} from './forum';

import {
  typeDef as Message,
  resolvers as MessageResolvers
} from './message';

const Query =  gql`
  type Query {
    forums: [Forum]
    forum(id: String!): Forum
    user(id: String!): User
  }
`;

const resolvers = {
  Query: { },
};

const schema = makeExecutableSchema({
  typeDefs: [ Query, User, Forum, Message ],
  resolvers: merge(resolvers, UserResolvers, ForumResolvers, MessageResolvers),
});

module.exports = { schema }