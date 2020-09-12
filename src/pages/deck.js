import React, { Component } from 'react';
import CardSelector from '../components/card_selector.js';
import DeckView from '../components/deck_view.js';

class Deck extends Component {
	state = {
		cards: []
	}

	update_deck = ( cards ) => {
		this.setState( { cards: cards } );
	}

	render () {
		return (
			<div className='grid_cols'>
				<CardSelector />
				<DeckView />
			</div>
		);
	}
}

export default Deck;
