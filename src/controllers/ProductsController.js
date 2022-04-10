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

export const getProductById = (req, res) => {
    Product.findById(req.params.productID, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json(product)
    });
}

export const updateProductById = (req, res) => {
    Product.findOneAndUpdate(
        {_id:req.params.productID}, 
        req.body, 
        {new: true, useFindAndModify: false}, 
        (err, product) => 
            {
                if(err){
                    res.send(err)
                }
                res.json(product)
    });
}

export const deleteProductById = (req, res) => {
    Product.remove({ _id: req.params.productID }, (err, product) => {
        if(err){
            res.send(err)
        }
        res.json({
            message: 'Product deleted with success.',
            status: 'success'
        })
    });
}