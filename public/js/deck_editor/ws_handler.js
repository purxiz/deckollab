import * as ws from '../ws.js';
import { update_deck } from './card_view.js';

var add_card = ( card ) => {
	let message = {
		action: 'add',
		card: card
	};
	ws.send(message);
};

var add_message_listener = ( cards ) => {
	ws.on_message( ( message ) => {
		update_deck(message, cards);
	});
};

export { add_card, add_message_listener }
