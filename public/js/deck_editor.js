import { add_input_listener } from './deck_editor/card_selection.js';
import * as ws_handler from './deck_editor/ws_handler.js';
import { update_deck } from './deck_editor/card_view.js';

var cards = $( '#data_source' ).data( 'fields' );

//TODO: fix when json format is better
let update_cards = [];
cards.forEach( ( card ) => {
	card.card.uuid = card.uuid;
	update_cards.push( card.card );
} );

update_deck( update_cards );

ws_handler.add_message_listener( update_cards );
add_input_listener( 'card_selector', ws_handler.add_card, update_cards );

