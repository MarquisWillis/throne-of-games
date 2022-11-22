const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        cart: [CartItem]
        cart_total: Int
    }

    type Game {
        gameId: ID!
        image: String
        title: String!
        price: Float!
        summary: String
        description: String
        genres: [String]
        rating: String
    }

    type CartItem {
        gameId: ID
        image: String
        title: String!
        price: Float!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        # query game id 
        # query user
        # query genre
        user: User
        allGames: [Game]
        game(gameId: ID!): Game
    }

    input CartInput {
        gameId: ID!
        image: String
        title: String!
        price: Float!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addToCart(body: CartInput): User
        removeFromCart(gameId: ID!): User
    }
`

module.exports = typeDefs;