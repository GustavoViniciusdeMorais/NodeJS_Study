import { v4 as uuidv4 } from 'uuid';

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

const resolvers = {
    getProducts: ({id}) => {
        return new Product(id, productDB[id]);
    },
    createProduct: ({input}) => {
        let id = uuidv4();
        productDB[id] = input;
        return new Product(id, input);
    }
};

export default resolvers;