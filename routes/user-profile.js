var express = require("express");

var logger = require('../config/logged-in.js');

var router = express.Router();



router.get('', logger.loggedIn, async function(req, res){
    console.log("user profile");
    res.render('user-profile');
    
});



module.exports = router;