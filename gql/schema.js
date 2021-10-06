const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    createAt: String
  }

  type UserDuplicate {
    id: ID
    name: String
    username: String
    email: String
    password: String
    siteWeb: String
    description: String
    avatar: String
    createAt: String
  }

  input UserInputDuplicate {
    name: String!
    username: String!
    email: String
    password: String
    siteWeb: String
    description: String
    avatar: String
  }

  input UserInput {
    name: String!
    username: String!
  }
  input UserUpdateInputDuplicate {
    name: String
    siteWeb: String
    email: String
    description: String
    avatar: String
  }

  input UserUpdateInput {
    name: String
  }

  input UserUpdateInputDuplicate {
    name: String
    siteWeb: String
  }

  type Query {
    # User
    getUser(id: ID, username: String): User
    getUsers: [User!]
  }

  type Mutation {
    # User
    register(input: UserInput): User
    updateUser(id: ID!, input: UserUpdateInput): Boolean
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
