import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL Study');
});

class Product {
    constructor(id, {name, description, price, soldout, stores})
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
    }
}

const productDB = {};

const root = { product: () =>  {
        return {
            "id": 1,
            "name": "test",
            "description": "test",
            "price": 2.5,
            "soldout": false,
            "stores": [
                {
                    "name": "LA"
                },
                {
                    "name": "Passadena"
                }
            ]
        }
    },
    createProduct: ({input}) => {
        let id = require('crypto').randomBytes.toString('hex');
        productDB[id] = input;
        return new Product(input);
    }
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Listen port 8080 for localhost/graphql'));