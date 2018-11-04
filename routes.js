var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index', { title: 'Spooky Scary Home Invader'})
});

router.get('/now', function(req, res, next){
    res.render('now', { title: 'Wacchu gonna do now?'})
});

router.get('/portfolio', function(req, res, next){
    res.render('portfolio', {title: 'Portfolio'})
});

module.exports = router;