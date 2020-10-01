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
        author: req.session.user,
        content: req.body.content,
        date: rightNow,





    });
    await post.save();



    console.log('almost done')
    res.redirect('post-form');

})

module.exports = router;