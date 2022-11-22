// import express, apollo, and auth middleware => (from utils)
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

// import typeDefs and resolvers from schemas, and db from connection.js
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

// set up port, app function call ot express server, and optimize server to use apollo with typeDefs, resolvers, and authMiddleware
const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

// encode url and use json express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// optimization code for production build
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// send an optimized html file to optimized production build
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

// startApolloServer function to start apollo server and apply server middleware to app
const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

// startApolloServer function call
startApolloServer(typeDefs, resolvers);