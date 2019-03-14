const express = require('express');
const express_graphql = require('express-graphql');
const { getUser, getUsers } = require('./graphql/data');
const schema = require('./graphql/schema');
const root = {
    user: getUser,
    users: getUsers
};

const app = express();
app.use('/api', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/api'));