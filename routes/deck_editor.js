var express = require('express');
var router = express.Router();
var Deck = require('../models/deck');

router.route('/')
	.get( (req, res) => {
		const decko = new Deck({
			url: 'hi',
			test: 'bob',
		});
		decko.save().then( (doc, err) => {
			res.redirect('/deck_editor/' + doc.url);
		});
	});

router.route('/:deck_id')
	.get ( (req, res) => {
		res.render('deck_editor', cards=[]);
	});

module.exports = router;
