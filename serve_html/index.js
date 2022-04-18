const mongoose = require('mongoose');
const controller = require('./controllers/homecontroller');
const express = require("express");
const handle = require("express-handlebars");
const app = express();

mongoose.connect("mongodb+srv://achi:Achi88@srt621.bcc2o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true }).then(() => console.log('Mongo Database is connected to the Server'));
app.get("/home", controller.books);
app.get("/books/:bookNumber", controller.detail);
app.engine('.ejs', handle.engine({ defaultLayout: 'style', extname: '.ejs', }));
app.set('view engine', '.ejs');
app.listen(3000);
console.log('Running on port 3000');