import React, { Component } from 'react';

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

	handleClick = ( event ) => {
		console.log(event);
	};
	
	render() {
		return (
			<div className='col_left'>
				<input id='card_selector' type='text' placeholder='Card Search...' autoComplete='off' onKeyUp={this.handleKeyUp}/>
				<div id='card_list'>
					{ this.state.cards.map( ( card, index ) => (
						<div key={index} className='list_item' onClick={this.handleClick}>{ card.name }</div>
					) ) }
				</div>
			</div>
		);
	}	
}

export default CardSelector;
