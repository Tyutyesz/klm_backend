const {ApolloServer} = require('apollo-server');
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');
const {typeDefs} = require('./Schema/TypeDefs');
const {resolvers} = require('./Schema/Resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({embed: true})]
})

server.listen().then(({url}) => {
    console.log("Server running on: " + url);
})
