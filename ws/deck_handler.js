var Deck = require( '../models/deck' );

var each_client = ( message, clients ) => {
	for ( let client in clients ) {
		clients[client].send( JSON.stringify( message ) );
	}
};

var handle_add = ( message, ws, clients ) => {
	Deck.findOneAndUpdate( { url: ws.pathname.split( '/' )[2]}, { $push: { cards: { uuid: message.card.uuid } } }, () => {
		each_client( message.card, clients );
	} );
};

var handler = ( message, ws, clients ) => {
	switch ( message.action ) {
	case 'add':
		handle_add( message, ws, clients );
		break;
	}
};

module.exports = handler;
