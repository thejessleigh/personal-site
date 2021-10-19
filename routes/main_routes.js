var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	res.render('index');
});

router.get('/now', function(req, res, next){
    res.render('now');
});

router.get('/software', function(req, res, next){
    let tags = req.query.tags;
    res.render('software', {tags: tags});
});

router.get('/writing', function(req, res, next){
    res.render('writing');
});

module.exports = router;
