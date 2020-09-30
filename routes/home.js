var express = require('express');
var mongoose = require('mongoose');
var logger = require('../config/logged-in.js');


var router = express.Router();





router.get('',logger.loggedIn, async function(req, res){
    console.log("home");
    console.log("only the choosen one reach this point")
    res.render('home.ejs');

})





module.exports = router;