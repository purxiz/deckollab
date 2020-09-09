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
		Deck.findOne({url: req.params.deck_id})
		.exec( (err, docs) => {
			//TODO: change card UUID into card object
			res.render('deck_editor', cards=docs.cards);
			if(docs === null || docs === undefined) {
				res.render('four-oh-four');
			}
		});
		
	});

module.exports = router;
