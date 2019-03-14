
let usersData = [
    {
        id: 1,
        name: 'Foo 1',
        age: 23,
        orders: [1]
    },
    {
        id: 2,
        name: 'Foo 2',
        age: 42,
        orders: [2]
    },
    {
        id: 3,
        name: 'Foo 3',
        age: 25,
        orders: [3]
    },
    {
        id: 4,
        name: 'Foo 4',
        age: 16,
        orders: [4]
    },
    {
        id: 5,
        name: 'Foo 5',
        age: 40,
        orders: [5]
    },
]

let orders = [
    {
        id: 1,
        date: '10-12-2018',
        deliveryAddress: 'XYZ',
        items: [1, 3],
        belongsToUser: 1
    },
    {
        id: 2,
        date: '10-02-2018',
        deliveryAddress: 'XYZ',
        items: [4, 3],
        belongsToUser: 2
    },
    {
        id: 3,
        date: '18-12-2018',
        deliveryAddress: 'XYZ',
        items: [4, 2],
        belongsToUser: 3
    },
    {
        id: 4,
        date: '02-01-2019',
        deliveryAddress: 'XYZ',
        items: [4, 2, 1],
        belongsToUser: 4
    },
    {
        id: 5,
        date: '03-01-2019',
        deliveryAddress: 'XYZ',
        items: [3, 4, 2, 1],
        belongsToUser: 5
    }
]
let items = [
    {
        id: 1,
        name: 'I phone X',
        price: 80000,
        description: 'Some description about I phone X'
    },
    {
        id: 2,
        name: 'Samsung Galaxy 10+',
        price: 75000,
        description: 'Some description about Samsung Galaxy 10+'
    },
    {
        id: 3,
        name: 'Fancy Key board',
        price: 1000,
        description: 'A super fancy key board.'
    },
    {
        id: 4,
        name: 'Fancy mouse',
        price: 800,
        description: 'A super fancy mouse.'
    }
]

const getOrders = (orderIdes) => {
    let _orders = orders.filter(order => orderIdes.includes(order.id));
    return _orders.map(order => {
        let _order = { ...order, items: [...order.items] };
        _order.items = getItems(_order.items)
        _order.totalPrice = _order.items.reduce((sum, item) => { return sum + item.price; }, 0);
        return _order;
    });
}

const getItems = (itemIds) => {
    return items.filter(item => itemIds.includes(item.id));
}


const getUser = (args) => {
    let user = usersData.find(user => {
        return user.id == args.id;
    });
    let _user = { ...user, orders: [...user.orders] };
    _user.orders = getOrders(_user.orders);
    return _user
};

const getUsers = () => {
    let _usersData = usersData.map((userData) => {
        let _userData = { ...usersData, orders: [...userData.orders] };
        _userData.orders = getOrders(_userData.orders);
        return _userData;
    })
    return _usersData;
};

module.exports = {
    getUser,
    getUsers
};