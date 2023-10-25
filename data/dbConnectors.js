import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from 'lodash';
import casual from "casual";

// Mongo connection
mongoose.Promise = global.Promise;
const dbName = 'vikiport'
// mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
//     useNewUrlParser: true
// });
mongoose.connect(`mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000`, {
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

export {Widgets};