var express = require('express');
var mongoose = require('mongoose');
const path = require("path");
var session = require('express-session')
var bcrypt = require('bcrypt');

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

var login = require('./routes/login.js');
var signup = require('./routes/signup.js');
var home = require('./routes/home.js');
var userProfile = require('./routes/user-profile.js');
var logout = require('./routes/logout.js');



const mongoDb = 'mongodb://localhost/social-31';
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));










var app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(express.urlencoded({extended: true}));




app.use('/', login);
app.use('/signup', signup);
app.use('/home', home)
app.use('/user-profile', userProfile);
app.use('/logout', logout);


app.listen(process.env.PORT|| 3000, function () {
    console.log('Example app listening on port 3000!');
});