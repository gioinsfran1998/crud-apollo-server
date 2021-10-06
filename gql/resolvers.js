const userController = require('../controllers/user');

const resolvers = {
  Query: {
    // User
    // getUser: (_, { id, username }) => userController.getUser(id, username),
    getUser: (_, { id, username }) => userController.getUser(id, username),
    getUsers: (_, {}) => userController.getUsers(),
  },

  Mutation: {
    //User
    register: (_, { input }) => {
      userController.register(input);
    },
    updateUser: (_, { id, input }) => userController.updateUser(id, input),
  },
};

module.exports = resolvers;
