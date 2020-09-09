var express = require('express');
var router = express.Router();
var Deck = require('../models/deck');
const all_cards = require('../scripts/all_cards.js');

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
			//TODO: change card UUID into card object (fix when json format is better)
			let deck_list = [];
			docs.cards.forEach( (card) => {
				deck_list.push({ uuid: card.uuid, card: all_cards.data[card.uuid][0] });
			});
			res.render('deck_editor', cards=deck_list);
			if(docs === null || docs === undefined) {
				res.render('four-oh-four');
			}
		});
		
	});

module.exports = router;
