const express = require('express');
const contactsController = require('./controllers/contactsController');


var app = express();

//Set up template engine

app.set('view engine', 'ejs');

//Static files
app.use(express.static('./public'));

// Fire controllers
contactsController(app);

// Listen to port
app.listen(3000);
console.log("Listening to port 3000");