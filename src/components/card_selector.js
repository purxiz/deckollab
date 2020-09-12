import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './card.js';

class CardSelector extends Component {
	state = {
		cards: []
	}

	handleKeyUp = ( event ) => {
		if( event.target.value.length < 3 ) {
			this.setState( { cards: [] } );
			return;
		}
		fetch( `/api/card_selector?string=${encodeURIComponent( event.target.value )}` )
		.then( ( response ) => response.json() )
		.then( ( data ) => {
			this.setState( { cards: data } );
		} );
	};

	handleClick = ( card ) => {
		this.props.addCards( card );
	};
	
	render() {
		return (
			<div className='col_left'>
				<input id='card_selector' type='text' placeholder='Card Search...' autoComplete='off' onKeyUp={this.handleKeyUp}/>
				<div id='card_list'>
					{ this.state.cards.map( ( card, index ) => (
						<Card key={index} onClick={this.handleClick} card={ card } />
					) ) }
				</div>
			</div>
		);
	}	
}

CardSelector.propTypes = {
	addCards: PropTypes.func.isRequired,
};

export default CardSelector;
