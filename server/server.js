const express = require('express'); 
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { MONGODB } = require('./config.js');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const PORT = 4000;

mongoose.connect(MONGODB); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

const app = express(); 
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP((req) => { // req, res, graphQLParams if issues
    return {
      schema,
      rootValue: resolvers,
      context: {
        authorizationHeader: req.headers.authorization,
      }
    }
  })
);
app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});