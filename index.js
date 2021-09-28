// require('dotenv').config({ path: '.env' });

import dotenv from 'env';

const mongoose = require('mongoose');
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import typeDefs from './gql/schema';
import resolvers from './gql/resolvers';

const dbURI = process.dotenv.env.BBDD;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dbURI, dbOptions)
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Database failed', error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server
  .listen()
  .then(({ url }) => {
    console.log(`====> Server on ${url} <====`);
  })
  .catch((error) => console.log('Database failed', error));
