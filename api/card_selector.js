var express = require('express');
var router = express.Router();
var fs = require('fs');

const all_cards = JSON.parse(fs.readFileSync('AllIdentifiers.json', 'utf8'));
console.log(Object.keys(all_cards.data));
router.route('/')
	.get( (req, res) => {
		returnable = [];
		for (card in all_cards.data) {
			if (all_cards.data[card].name.toLowerCase().includes(req.query.string.toLowerCase())) {
				returnable.push(all_cards.data[card]);
			}
		}
		res.json(returnable);
	});

module.exports = router;
