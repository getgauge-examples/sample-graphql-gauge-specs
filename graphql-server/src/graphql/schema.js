const { buildSchema } = require('graphql');

// GraphQL schema
module.exports = buildSchema(`
    type Query {
        user(id: Int!): User
        users(name: String): [User]
    },
    type Mutation {
        updateUser(name: String, age: Int): User
    },
    type User {
        id: Int
        age: Int
        name: String
        orders: [Order]
    }

    type Order {
        id: Int
        date: String
        deliveryAddress: String
        totalPrice: Int
        items: [Item]
        belongsToUser: Int
    }

    type Item {
        id: Int
        name: String
        price: Int
        description: String
    }
`);