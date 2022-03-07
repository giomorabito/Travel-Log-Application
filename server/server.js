const express = require('express'); 
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const MONGODB = 'DB HERE'; 

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const PORT = 4000; 
   

const server = new ApolloServer({ schema, resolvers });

mongoose.connect(MONGODB); 
mongoose.connection.once('open', function() { 
  console.log('Connected to the Database.');
});
mongoose.connection.on('error', function(error) {
  console.log('Mongoose Connection Error : ' + error);
});

const app = express(); 
app.use(cors());

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        schema,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: resolvers, 
  graphiql: true
}));

app.listen(PORT, function() { 
  console.log(`Server listening on port ${PORT}.`);
});