var express = require("express");
var mongoose = require('mongoose');
var posts = require('../models/posts.js');

var logger = require('../config/logged-in.js');

var router = express.Router();



router.get('', logger.loggedIn, async function(req, res){
    console.log("user profile");
    let userPosts = await posts.find({ userId: req.session.user._id });
    let userInfo = req.session.user.fullname;
    
    res.render('user-profile',{userPosts, userInfo});
    
});



module.exports = router;