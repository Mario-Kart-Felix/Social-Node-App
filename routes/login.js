var express = require('express');
var mongoose = require('mongoose');
const user = require('../models/user');
var router = express.Router();





router.get('/', async function(req, res){
    console.log('login')
    res.render('login.ejs');

});


router.post('/log-in', async function(req, res){
    var userEmail = req.body.email;
    var password = req.body.password;

    var emailSearch = await user.findOne({email: userEmail});
    if(emailSearch === null){
        console.log('incorrect email / password');
        return res.redirect('/');
    }else{
        console.log("found it ")
        return res.redirect('/home')
    }
})



module.exports = router;