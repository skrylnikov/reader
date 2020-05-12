/*
import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();

const router = new Router();

router.get('/api', async(ctx) => ctx.body = 'hello world');

app.use(router.routes());

app.listen(8000);
*/
import { ApolloServer, gql } from 'apollo-server';


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post {
    id: ID
    author: String
    text: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    feed: [Post]
  }
`;

const feed = [
  {
    id: '1',
    author: 'dskr',
    text: 'hello world',
  },
  {
    id: '2',
    author: 'dskr',
    text: 'hello world 2',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    feed: () => feed,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
