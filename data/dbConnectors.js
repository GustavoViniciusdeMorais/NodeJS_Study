import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from "casual";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:gustavo@mongo:27017/GustavoDB?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log(err);
    process.exit();
});

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    stores: {
        type: Array
    },
});

const Widgets = mongoose.model('widgets', widgetSchema);

const sequelize = new Sequelize('sqlite::memory');

const Categories = sequelize.define('categories', {
    name: DataTypes.String,
    description: DataTypes.String,
});

Categories.sync({force: true}).then(() => {
    _.times(5, (i) => {
        Categories.create({
            name: casual.word,
            description: casual.sentence
        })
    })
});

export {Widgets, Categories};