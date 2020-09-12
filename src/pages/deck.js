import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardSelector from '../components/card_selector.js';
import DeckView from '../components/deck_view.js';

class Deck extends Component {
	
	state = {
		cards: []
	}

	componentDidMount() {
		fetch( `/api/deck_editor/${this.props.match.params.deck_id}` )
		.then( ( response ) => response.json() )
		.then ( ( cards ) => {
			this.setState( { cards: cards } );
		} );
	}
	
	add_cards = ( new_cards ) => {
		if ( !Array.isArray( new_cards ) ) new_cards = [new_cards];
		this.setState( { cards: [...this.state.cards, ...new_cards] } );
	}

	

	render () {
		return (
			<div className='grid_cols'>
				<CardSelector addCards={this.add_cards}/>
				<DeckView cards={this.state.cards}/>
			</div>
		);
	}
}

Deck.propTypes = {
	match: PropTypes.object, //TODO: more strict validation?
};

export default Deck;
