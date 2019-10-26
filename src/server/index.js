import { ApolloServer, gql} from 'apollo-server';

const typeDefs = gql`
  type User {
    userName: String
    avatar: String
    id: String!
  }
  type Query {
    user(id: String!): User
  }
`;

const resolvers = {
  Query: {
    user: (parent, { id }) => {
      return {
        userName: 'John', 
        avatar: 'https://api.adorable.io/avatars/70/john@adorable.io.png',
        id: '1',
      }
    },
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
