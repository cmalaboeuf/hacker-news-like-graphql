import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from './graphql';

var app = express();

app.use(cors());

// GraphqQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true,
  graphiql: true
})));

// Connect mongo database
mongoose.connect('mongodb://mongo/graphql');

// start server
var server = app.listen(8080, () => {
  console.log('Listening at port', server.address().port);
});
