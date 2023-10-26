import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from "casual";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/widgets', {
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
    name: DataTypes.STRING,
    description: DataTypes.STRING,
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