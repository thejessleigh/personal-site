var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index')
});

router.get('/now', function(req, res, next){
    res.render('now')
});

router.get('/portfolio', function(req, res, next){
    res.render('portfolio')
});

router.get('/speaker', function(req, res, next){
    res.render('speaker')
});

module.exports = router;
