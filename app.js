const express = require('express')
const app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('views', {
	autoescape: true,
	express: app
});

app.set('view engine', 'njk');
app.listen(3000);

const mainRouter = require('./routes');

app.use('/', mainRouter);
app.use(express.static(__dirname + '/public'));

module.exports = app;
