const express = require('express');
const app = express();

const dotenv = require('dotenv');
const routes = require('./routes/routesController');
const cors = require('cors');
const mongoose = require('mongoose');
let PORT = process.env.PORT || 3001

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

mongoose.set("strictQuery", false);

// mongoose.connect(`mongodb+srv://Anum:anum@cluster0.x9rxwjh.mongodb.net/wheather`
let a = "mongodb+srv://Anum:anum@cluster0.irgo8li.mongodb.net/"
mongoose.connect(a, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {

    app.use('/', routes.routes())
    console.log('connection successful..');
}).catch((err) => console.log(err));



app.listen(80, () => {
    console.log(`server listening on ${PORT}`);
});