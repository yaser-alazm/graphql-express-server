const express = require('express');
const expressGraphQL = require('express-graphql');
const graphqlSchema = require('./schema.js');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema: graphqlSchema,
    graphiql: true,
  }),
);

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});
