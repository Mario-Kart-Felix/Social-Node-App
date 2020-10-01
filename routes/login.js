var express = require('express');
var mongoose = require('mongoose');
const user = require('../models/user');
var bcrypt = require('bcrypt');
var router = express.Router();





router.get('/', async function(req, res){
    console.log('login')
    res.render('login.ejs');

});


router.post('/log-in', async function(req, res){
    var userEmail = req.body.email;
    var password = req.body.password;

    var userSearch = await user.findOne({email: userEmail});
    console.log(userSearch);
    if(userSearch === null || userEmail === "" || password === ""){
        console.log('incorrect email / password');
        return res.redirect('/');
    }else{
        var result = await bcrypt.compareSync(password, userSearch.password);
        if(result){
            console.log("found it ")
            console.log("checking");
            console.log('logging you in')
            req.session.user = userSearch;
            return res.redirect('/home');
        }else{
            console.log("error logging in")
            return res.redirect('/');
        }
        
        
    }
})



module.exports = router;