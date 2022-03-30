const postResolver = require('./post');
const userResolver = require('./user');

const resolvers = {
    ...userResolver,
    ...postResolver
}

module.exports = resolvers;