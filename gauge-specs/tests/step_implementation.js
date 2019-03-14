const assert = require('assert');
const { GraphQLClient } = require('graphql-request');

function userQuery(name) {
    return `{
            user(id:${name}){
                id
                name
                age
                orders {
                    id
                    date
                    totalPrice
                    items {
                        id
                        price
                        description
                    }
                }
            }
        }`;
};

const client = new GraphQLClient("http://localhost:4000/api");
step("GraphQL api returns <UserData> for user with <UserId>", async function (userData, userId) {
    let expectedData = JSON.parse(userData);
    let actualData = await client.request(userQuery(userId), null);

    assert.deepEqual(expectedData, actualData);
});