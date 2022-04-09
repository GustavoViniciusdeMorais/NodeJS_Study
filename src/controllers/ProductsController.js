import mongoose from "mongoose";
import { ProductsSchema } from "../modules/Products";

const Product = mongoose.model('Product', ProductsSchema);

export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, product) => {
        if(err){
            res.send(err)
        }
        res.json(product)
    });
}

export const getProducts = (req, res) => {
    Product.find({}, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json(product)
    });
}