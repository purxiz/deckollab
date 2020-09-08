var express = require('express');
var router = express.Router();

router.route('/')
	.get( (req, res) => {
		res.render('deck_editor', cards=[]);
	});

module.exports = router;
