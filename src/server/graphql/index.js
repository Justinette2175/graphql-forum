import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import context from './context';

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

import {
  typeDef as Mutation,
  resolvers as MutationResolvers
} from './mutation';

const schema = makeExecutableSchema({
  typeDefs: [ Query, User, Forum, Message, Mutation ],
  resolvers: merge(QueryResolvers, UserResolvers, ForumResolvers, MessageResolvers, MutationResolvers)
});

module.exports = {
  schema, 
  context
}