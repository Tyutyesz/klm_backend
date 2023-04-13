const {users, booking} = require('../FakeData');

const resolvers = {
    Query: {
        getAllUsers() {
            return users;
        },
        getBooking() {
            return booking;
        }
    },
}


module.exports = {
    resolvers,
}
