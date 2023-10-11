# GraphQL and Nodejs

Created by Gustavo Morais

```sh
```

```sh
apt install nodejs -y
apt install npm -y
npm init
npm i express express-graphql graphql nodemon
npm i --save-dev @babel/cli @babel/core @babel/node @babel/preset-env
```

### Basic index.js
```js
import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL Study');
});

const root = { hello: () =>  "I'm root!"}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Listen port 8080 for localhost/graphql'));
```

<img src="./public/imgs/graphiql.png" width="800" height="500">
