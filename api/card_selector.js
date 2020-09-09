var express = require('express');
var router = express.Router();
var fs = require('fs');

const all_cards = JSON.parse(fs.readFileSync('AtomicCards.json', 'utf8'));
router.route('/')
	.get( (req, res) => {
		returnable = [];
		for (card in all_cards.data) {
			if (all_cards.data[card][0].name.toLowerCase().includes(req.query.string.toLowerCase())) {
				returnable.push(all_cards.data[card]);
			}
		}
		res.json({
			data: returnable,
			length: req.query.string.length,
		});
	});

module.exports = router;
