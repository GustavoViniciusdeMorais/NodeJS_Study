import { v4 as uuidv4 } from 'uuid';
import { Widgets } from './dbConnectors';

class Product {
    constructor(id, {name, description, price, soldout, inventory, stores})
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.inventory = inventory;
        this.stores = stores;
    }
}

const productDB = {};

const resolvers = {
    getProduct: ({id}) => {
        return new Promise((resolve) => {
            Widgets.findById({_id: id}, (err, product) => {
                if (err) reject (err)
                else resolve(product)
            })
        });
    },
    createProduct: ({input}) => {
        let id = uuidv4();
        productDB[id] = input;
        return new Product(id, input);
    }
};

export default resolvers;