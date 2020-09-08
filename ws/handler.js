const WebSocket = require('ws');
const url = require('url');
const wss = new WebSocket.Server({ noServer: true });
const { v4: uuidv4 } = require('uuid');

var lobbies = {}

wss.on('connection', function(ws, req) {
	ws.id = uuidv4();
	if(!lobbies[ws.pathname]) {
		lobbies[ws.pathname] = {};
	}
	lobbies[ws.pathname][ws.id] = ws;
});

const handler = (request, socket, head) => {
	wss.handleUpgrade(request, socket, head, (ws) => {
		const pathname = request.url;
		ws.pathname = pathname;
		wss.emit('connection', ws, request);
	});
};

module.exports = {
	upgrade_handler: handler,
}
