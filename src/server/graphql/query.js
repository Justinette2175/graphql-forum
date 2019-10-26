import { gql } from 'apollo-server-express';

const typeDef =  gql`
  type Query {
    forums: [Forum]
    forum(id: String!): Forum
    user(id: String!): User
  }
`;

const resolvers = {
  Query: { },
};

module.exports = {
  typeDef, 
  resolvers,
}