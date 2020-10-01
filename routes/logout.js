var express = require('express');
var router = express.Router();


router.get('', async function (req, res) {
    console.log('logging out');
    await delete req.session.user;
    res.redirect('/')
});



module.exports = router;