const postResolver = require('./post');
const userResolver = require('./user');

module.exports = {
    Mutation: {
        ...userResolver.Mutation
    },
    ...postResolver
    
};