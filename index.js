var mongoose = require('mongoose');
const path = require('path');
var fs = require('fs');


global.all_cards = JSON.parse(fs.readFileSync('AllIdentifiers.json', 'utf8'));

mongoose.connect('mongodb://localhost/deckollab', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'pug');

var port = process.env.PORT || 9191;

app.use('/', require('./routes/default'));
app.use('/deck_editor', require('./routes/deck_editor'));
app.use('/api/card_selector', require('./api/card_selector'));

app.locals.basedir = path.join(__dirname, '.');

app.listen(port);
console.log('LISTENING ON ' + port);
