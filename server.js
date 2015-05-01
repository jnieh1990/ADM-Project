var path = require('path');
var express = require('express');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');

app = express();

var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        renderName: function(user){
            return 'Nom : ' + user.name;
        },
        renderLastName: function(user){
            return 'Prenom : ' + user.lastname;
        }
    },
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//lib
logLib = require('./lib/log');

//config
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/book_phone');

//import models
models = require('./models');

//import routing
require('./routing/callback');
require('./routing/users');
require('./routing/pdv');


app.listen(8080);