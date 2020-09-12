import React, { Component } from 'react';
import Card from './card.js';
import PropTypes from 'prop-types';
import { deep_sort } from '../utils/sort.js';

class DeckView extends Component {

	state = {
		sorts: [ 'cmc' ],
	};

	generate_bins = ( sorted_cards, depth ) => {
		if ( Array.isArray( sorted_cards ) ) {
			return sorted_cards.map( ( card, index ) =>
				<Card card={card} key={index} />
			);
		}
		return sorted_cards.labels.map( ( label, index ) => {
			return (
				<div key={index} className={depth ? 'sub-category' : 'category'}>
					<h3 style={{textAlign: 'center'}}>{label}</h3>
					{this.generate_bins( sorted_cards.bins[label], true )}
				</div>
			);
		} );
		
	};
	
	render() {
		const sorted_cards = deep_sort( this.props.cards, this.state.sorts );
		return (
			<div id='maindeck'>
				{this.generate_bins( sorted_cards )}
			</div>
		);
	}
}

DeckView.propTypes = {
	cards: PropTypes.array.isRequired,
};

export default DeckView;
