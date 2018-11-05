const express = require('express')
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.set('view engine', 'njk');
app.listen(3000);

const mainRouter = require('./main_routes');
const thenRouter = require('./then_routes');

app.use(express.static(__dirname + '/public'));
app.use('/', mainRouter);
app.use('/then', thenRouter);
app.use("*", function(req, res){
	res.status(404).render('404')
});

module.exports = app;
