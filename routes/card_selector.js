var express = require( 'express' );
var router = express.Router();
const all_cards = require( '../scripts/all_cards.js' );

router.route( '/' )
	.get( ( req, res ) => {
		let returnable = [];
		for ( let card in all_cards.data ) {
			//TODO: fix when json format is better
			if ( all_cards.data[card][0].name.toLowerCase().includes( req.query.string.toLowerCase() ) ) {
				let card_to_return = all_cards.data[card][0];
				returnable.push( card_to_return );
			}
		}
		res.json( returnable );
	} );

module.exports = router;
