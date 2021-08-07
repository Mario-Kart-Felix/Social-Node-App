var express = require("express");
var mongoose = require("mongoose");
var Post = require('../models/posts.js')
var logger = require('../config/logged-in.js');

var router = express.Router();


router.get('', logger.loggedIn, async function(req, res){
    console.log(req.session.user);
    res.render("post-form")
})

router.post('', async function(req, res){
    console.log('posting');
    let a = Date(Date.now());
    let rightNow = a.toString();
    const post = new Post({
        author: req.session.user.username,
        content: req.body.content,
        date: rightNow,
        userId: req.session.user._id





    });
    await post.save();



    console.log('almost done')
    res.redirect('home');

})

module.exports = router;