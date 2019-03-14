# Getting Started with Gauge

   | UserId |        UserData     |
   |--------|---------------------|
   |1       |{"user":{"id":1,"name":"Foo 1","age":23,"orders":[{"id":1,"date":"10-12-2018","totalPrice":81000,"items":[{"id":1,"price":80000,"description":"Some description about I phone X"},{"id":3,"price":1000,"description":"A super fancy key board."}]}]}}|
   |2       |{"user":{"id":2,"name":"Foo 2","age":42,"orders":[{"id":2,"date":"10-02-2018","totalPrice":1800,"items":[{"id":3,"price":1000,"description":"A super fancy key board."},{"id":4,"price":800,"description":"A super fancy mouse."}]}]}}  |
   |3       |{"user":{"id":3,"name":"Foo 3","age":25,"orders":[{"id":3,"date":"18-12-2018","totalPrice":75800,"items":[{"id":2,"price":75000,"description":"Some description about Samsung Galaxy 10+"},{"id":4,"price":800,"description":"A super fancy mouse."}]}]}}   |
   |4       |{"user":{"id":4,"name":"Foo 4","age":16,"orders":[{"id":4,"date":"02-01-2019","totalPrice":155800,"items":[{"id":1,"price":80000,"description":"Some description about I phone X"},{"id":2,"price":75000,"description":"Some description about Samsung Galaxy 10+"},{"id":4,"price":800,"description":"A super fancy mouse."}]}]}}   |
   |5       |{"user":{"id":5,"name":"Foo 5","age":40,"orders":[{"id":5,"date":"03-01-2019","totalPrice":156800,"items":[{"id":1,"price":80000,"description":"Some description about I phone X"},{"id":2,"price":75000,"description":"Some description about Samsung Galaxy 10+"},{"id":3,"price":1000,"description":"A super fancy key board."},{"id":4,"price":800,"description":"A super fancy mouse."}]}]}}   |
## Get user data

* GraphQL api returns <UserData> for user with <UserId>