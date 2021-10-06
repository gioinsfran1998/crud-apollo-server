const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolvers');
require('dotenv').config({ path: '.env' });
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');

const dbURI = process.env.BBDD;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbURI, dbOptions)
  .then(() => console.log('====> Database connected <===='))
  .catch((error) => console.log('====> Database failed <====', error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server
  .listen()
  .then(({ url }) => {
    console.log(`====> Server on ${url} <====`);
  })
  .catch((error) => console.log('====> Database failed <====', error));
