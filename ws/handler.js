const WebSocket = require( 'ws' );
const wss = new WebSocket.Server( { noServer: true } );
const { v4: uuidv4 } = require( 'uuid' );
const deck_handler = require( './deck_handler.js' );

var lobbies = {};

const setup = ( ws ) => {
	ws.isAlive = true;
	ws.heartbeat = setInterval( () => {
		if ( !ws.isAlive ) {
			return ws.terminate();
		}
		ws.isAlive = false;
		ws.send( 'ping' );
	}, 3000 ); //TODO: make heartbeat time a config value, also affects public/js/ws.js
	ws.on( 'message', ( message ) => {
		if( message === 'pong' ) {
			ws.isAlive = true;
		}
		else {
			deck_handler( JSON.parse( message ), ws, lobbies[ws.pathname] );
		}
	} );
	ws.on( 'close', () => {
		clearInterval( ws.heartbeat );
		delete lobbies[ws.pathname][ws.id];
		if ( Object.keys( lobbies[ws.pathname] ).length === 0 ) {
			delete lobbies[ws.pathname];
		}
	} );
};

wss.on( 'connection', function( ws ) {
	ws.id = uuidv4();
	setup( ws );
	if( !lobbies[ws.pathname] ) {
		lobbies[ws.pathname] = {};
	}
	lobbies[ws.pathname][ws.id] = ws;
	console.log( 'new connection in lobby' + ws.pathname );
} );

const handler = ( request, socket, head ) => {
	wss.handleUpgrade( request, socket, head, ( ws ) => {
		const pathname = request.url;
		ws.pathname = pathname;
		wss.emit( 'connection', ws, request );
	} );
};

module.exports = {
	upgrade_handler: handler,
};
