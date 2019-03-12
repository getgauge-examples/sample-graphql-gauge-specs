var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        user(name: String): User
        users(name: String): [User]
    },
    type User {
        age: Int
        name: String
    }
`);

var usersData = [
    {
        name: 'Foo 1',
        age: 23
    },
    {
        name: 'Foo 2',
        age: 42
    },
    {
        name: 'Foo 3',
        age: 25
    },
    {
        name: 'Foo 4',
        age: 16
    },
    {
        name: 'Foo 5',
        age: 40
    },
]

var getUser = (args) => {
    return usersData.find(user => {
        return user.name == args.name;
    });
};

var getUsers = () => {
    return usersData;
};

var root = {
    user: getUser,
    users: getUsers
};

var app = express();
app.use('/api', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/api'));