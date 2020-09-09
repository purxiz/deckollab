const socket = new WebSocket('ws://' + location.host + location.pathname);
let heartbeatTimeout;

var socket_close_message = () => {
	//TODO: grey out the page or something when the socket closes due to no heartbeat
};

var heartbeat = (event) => {
	clearTimeout(heartbeatTimeout);

	if(event.data && event.data === 'ping') {
		socket.send('pong');
	}
	
	heartbeatTimeout = setTimeout( () => {
		socket.close();
		socket_close_message();
	}, 3000 + 1000);
}

socket.addEventListener( 'open', heartbeat );
socket.addEventListener( 'message', function ( event ) {
	heartbeat(event);
});
socket.addEventListener('close',  () => {
	clearTimeout(heartbeatTimeout);
});



var get_socket = () => {
	return socket;
};

var send = ( message ) => {
	let formatted = JSON.stringify(message);
	socket.send(formatted);
}

var on_message = ( callback ) => {
	socket.addEventListener('message', ( event ) => {
		if(event.data !== 'ping') callback( JSON.parse(event.data) );
	});
};

export { get_socket, send, on_message }
