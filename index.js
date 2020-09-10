var mongoose = require('mongoose');
const path = require('path');
var fs = require('fs');
const favicon = require('serve-favicon');
const wsh = require('./ws/handler');

mongoose.connect('mongodb://localhost/deckollab', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

var express = require('express');
var app = express();

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(express.static('public'));

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'pug');

var port = process.env.PORT || 9191;

app.use('/', require('./routes/default'));
app.use('/deck_editor', require('./routes/deck_editor'));
app.use('/api/card_selector', require('./api/card_selector'));

// 404 page on bad url response, keep at end of page.
app.use(function (req, res, next) {
	res.status(404);
	// respond with html page
	if (req.accepts('html')) {
		res.render('404', { url: req.url });
		return;
	}
});

app.locals.basedir = path.join(__dirname, '.');

const server = app.listen(port);
server.on('upgrade', wsh.upgrade_handler);
console.log('LISTENING ON ' + port);
