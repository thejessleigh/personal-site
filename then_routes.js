var express = require('express');
var router = express.Router();

router.get('/oct2018', function(req, res, next){
    res.render('then/oct2018')
});

router.get('/march2018', function(req, res, next){
    res.render('then/march2018')
});

router.get('/nov2017', function(req, res, next){
    res.render('then/nov2017')
});

module.exports = router;