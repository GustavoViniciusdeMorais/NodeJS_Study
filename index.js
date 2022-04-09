import express from 'express'
import routes from './src/routes/routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:gustavo@172.30.0.2:27017/GustavoDB?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log(err);
    process.exit();
});

// body parser connection
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
    res.send(`Node is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);