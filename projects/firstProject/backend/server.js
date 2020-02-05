const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose')

const path = require('path')

const resolvers = require('./resolvers')

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-ec8vp.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname,'schema.graphql'),
    resolvers: resolvers
})

server.start();