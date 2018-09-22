const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
let port = 3000;

/*  Это простая схема построенная с использванием
    языка схемы GraphQL */

let schema = buildSchema(`
  type Query {
    postTitle: String,
    blogTitle: String
  }
`);

/* root предоставляет функции распознования для каждого
   endpoint'a */

let root = {
  postTitle: () => {
    return 'Build a Simple GraphQL Server With Express and NodeJS';
  },
  blogTitle: () => {
    return 'scotch.io';
  }
};

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // Если true, то отображает GraphiQL
}));             // (браузерная IDE для создания и выполненения запросов к endpoint'ам),
                 // когда endpoint'ы GraphQL были загружены   

app.listen(port);
console.log('GraphQL API server running at localhost: ' + port);