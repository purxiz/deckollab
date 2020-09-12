var express = require( 'express' );
var router = express.Router();
var Deck = require( '../models/deck' );
const all_cards = require( '../scripts/all_cards.js' );

router.route( '/' )
	.get( ( req, res ) => {
		const decko = new Deck( {
			url: 'hi',
			test: 'bob',
		} );
		decko.save().then( ( doc ) => {
			//TODO: create a more generic error page
			res.json( { url: doc.url } );
		} );
	} );

router.route( '/:deck_id' )
	.get ( ( req, res ) => {
		Deck.findOne( {url: req.params.deck_id} )
			.exec( ( err, docs ) => {
				if ( err ) return;
				//TODO: change card UUID into card object (fix when json format is better)
				let deck_list = [];
				docs.cards.forEach( ( card ) => {
					console.log( card );
					deck_list.push( all_cards.data[card.uuid][0] );
				} );
				return res.json( deck_list );
			} );
		
	} );

module.exports = router;
