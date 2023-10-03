const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// Apply Apollo Server as middleware to Express
server.start().then(() => {
  server.applyMiddleware({ app });
});

// Serve static assets from client/build (if in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Comment out or remove the following block if you want to use Apollo Server Playground
if (process.env.NODE_ENV !== 'production') {
  app.get('/', (req, res) => {
    res.send('Hello! This is your GraphQL API.');
  });
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
