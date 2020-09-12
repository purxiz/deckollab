import React, { Component } from 'react';
import Card from './card.js';
import PropTypes from 'prop-types';
import { deep_sort } from '../utils/sort.js';

class DeckView extends Component {

	state = {
		sorts: [ 'cmc', 'type' ],
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
					<h3 className={depth ? 'sub_category_header' : 'category_header'}>{label}</h3>
					{this.generate_bins( sorted_cards.bins[label], true )}
				</div>
			);
		} );
		
	};


	get_sort_values = () => {
		const sort_values = [
			{ value: '', name: 'none' },
			{ value: 'cmc', name: 'cmc' },
			{ value: 'type', name: 'type' },
		];
		return sort_values.map( ( sort_value, index ) => {
			return <option value={sort_value.value} key={index}>{sort_value.name}</option>;
		} );
	};

	cmc_change = ( index, event ) => {
		const sort_type = event.target.value;
		const new_sorts = this.state.sorts.slice();
		new_sorts[index] = sort_type;
		this.setState( { sorts: new_sorts } );
	};
	
	render() {
		const sorted_cards = deep_sort( this.props.cards, this.state.sorts );
		return (
			<div id='maindeck' className='col'>
				<div className='options_bar'>
					<span>Sorts: </span>
					<select onChange={( event ) => this.cmc_change( 0, event )} defaultValue='cmc'>
						{this.get_sort_values()}
					</select>
					<span>&gt;&gt;</span>
					<select onChange={( event ) => this.cmc_change( 1, event )} defaultValue='type'>
						{this.get_sort_values()}
					</select>
				</div>
				<div className='card_area'>
					{this.generate_bins( sorted_cards )}
				</div>
			</div>
		);
	}
}

DeckView.propTypes = {
	cards: PropTypes.array.isRequired,
};

export default DeckView;
