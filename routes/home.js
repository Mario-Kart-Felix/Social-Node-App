var express = require('express');
var mongoose = require('mongoose');


var router = express.Router();


// function loggedIn(req, res, next) {
//     if (req.user) {
//         next();
//     } else {
//         console.log('cant view page must login first');
//         res.redirect('/')
//     }
// }



router.get('', async function(req, res){
    console.log("home");
    console.log("only the choosen one reach this point")
    res.render('home.ejs');

})





module.exports = router;