import { add_input_listener } from './deck_editor/card_selection.js';
import { update_deck } from './deck_editor/card_view.js';

var cards = $('#data_source').data('fields');

add_input_listener('card_selector', update_deck, cards);

