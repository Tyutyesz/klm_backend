const {booking} = require('../FakeData');

const resolvers = {
    Query: {
        getBooking() {
            return booking;
        }
    },
}


module.exports = {
    resolvers,
}
