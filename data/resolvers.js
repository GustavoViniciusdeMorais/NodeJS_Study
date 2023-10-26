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
        return Widgets.find({}, 'name').exec()
    },
    createProduct: ({input}) => {
        // let id = uuidv4();
        // productDB[id] = input;
        // return new Product(id, input);
        const newWidget = new Widgets({
            name: input.name,
            description: input.description,
            price: input.price,
            soldout: input.soldout,
            inventory: input.inventory,
            stores: input.stores,
        });

        newWidget.id = newWidget._id;
        
        return newWidget.save()
    }
};

export default resolvers;