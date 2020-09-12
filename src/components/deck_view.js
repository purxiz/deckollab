import React, { Component } from 'react';
import Card from './card.js';
import PropTypes from 'prop-types';

class DeckView extends Component {
	
	render() {
		return (
			<div id='maindeck'>
				{this.props.cards.map( ( card, index ) => (
					<Card card={card} key={index} />
				) ) }
			</div>
		);
	}
}

DeckView.propTypes = {
	cards: PropTypes.array.isRequired,
};

export default DeckView;
