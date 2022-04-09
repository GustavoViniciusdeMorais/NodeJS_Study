import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductsSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the product name'
    },
    price: {
        type: Number,
        required: 'Enter the product name'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});