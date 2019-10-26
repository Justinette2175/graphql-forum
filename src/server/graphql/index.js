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

import {
  typeDef as Query,
  resolvers as QueryResolvers
} from './query';

const schema = makeExecutableSchema({
  typeDefs: [ Query, User, Forum, Message ],
  resolvers: merge(QueryResolvers, UserResolvers, ForumResolvers, MessageResolvers),
});

module.exports = { schema }