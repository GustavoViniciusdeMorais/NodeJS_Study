import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL Study');
});

const root = { product: () =>  {
    return {
        "id": 1,
        "name": "test",
        "description": "test",
        "price": 2.5,
        "soldout": false
    }
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Listen port 8080 for localhost/graphql'));