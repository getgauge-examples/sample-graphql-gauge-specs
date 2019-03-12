/* globals gauge*/
const assert = require('assert');
const { GraphQLClient } = require('graphql-request');
let queries = {
    users: `{
        users {
          name
          age
        }
      }`,
    userQuery(name) {
        return `{
            user(name:"${name}"){
                age
            }
        }`;
    }
}

const client = new GraphQLClient("http://localhost:4000/api");
step("Users api returns folowwing users <users>", async function (users) {
    let data = await client.request(queries.users, null);
    let out = data.users.every((user) => {
        return users.rows.some(row => {
            return row.cells[0] == user.name && row.cells[1] == user.age;
        });
    });
    assert.ok(out);
});

step("User <name> age is <age>", async function (name, age) {
    let data = await client.request(queries.userQuery(name));
    assert.equal(data.user.age, age, `Expected ${name} age to be ${age} but was ${data.user.age}`);
});

step("Another way to fetch user data <query>", async function (query) {
    let data = await client.request(query, null);
    console.log(data);
});