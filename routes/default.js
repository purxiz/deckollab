var express = require( 'express' );
var router = express.Router();

router.route( '/' )
	.get( ( req, res ) => {
		res.render( 'index', { decks: [] } );
	} );
	
module.exports = router;
