import mongoose from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
const dbName = 'widgets'
// mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
//     useNewUrlParser: true
// });
mongoose.connect(`mongodb://root:gustavo@mongo:27017/${dbName}?authSource=admin`, {
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