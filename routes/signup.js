var express = require("express");
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('../models/user.js');

var router = express.Router();





router.get('', async function(req, res){





    console.log("signup");



    res.render('signup.ejs');

});


router.post('/submit', async function(req, res){

    console.log("submitting")
    
    
    
    let emailSearch = await User.findOne({email: req.body.email});
    let userSearch = await User.findOne({username: req.body.username});

    if(emailSearch != null){
        console.log('email already in use');
        return res.redirect('/signup')
    }else if(userSearch != null){
        console.log("username already in use");
        return res.redirect('/signup');
    }else{
        console.log("all systems clear and ready for sign up");
        const hash = bcrypt.hashSync( req.body.password ,10);

 
        const user = new User({
            fullname: req.body.fullname,
            email: req.body.email,
            username: req.body.username,
            password: hash
        }); 

        await user.save();
    


        return res.redirect('/');
    }
    
    
    
   
    



    
    

})





module.exports = router;