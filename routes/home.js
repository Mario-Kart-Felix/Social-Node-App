var express = require('express');
var mongoose = require('mongoose');
var logger = require('../config/logged-in.js');
var posts = require('../models/posts');


var router = express.Router();





router.get('',logger.loggedIn, async function(req, res){
    console.log("home");
    console.log("only the choosen one reach this point")
    let userPosts = await findPost(req,res);




    res.render('home.ejs', {userPosts});

})


async function findPost(req,res){
    console.log(req.session.user);
    let userPosts = await posts.find({userId: req.session.user._id});
    


    return userPosts;
}





module.exports = router;