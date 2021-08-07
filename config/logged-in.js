




function loggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        console.log('cant view page must login first');
        res.redirect('/')
    }
}



module.exports.loggedIn = loggedIn;