import { sort } from '../utils/sort.js';

var update_display = ( sorted_cards ) => {
	$( '#maindeck' ).empty();
	
	sorted_cards.labels.forEach( ( label ) => {
		
		let $title = $( '<div>' ).addClass( 'category' )
			.append(
				$( '<h3>' ).css( 'text-align', 'center' ).html( label )
			);
		
		$( '#maindeck' )
			.append(
				$title
			);
		
		sorted_cards.bins[label].forEach( ( card ) => {
			$title.append( $( '<div>' ).html( card.name ).addClass( 'list_item' ) );
		} );

	} );
};

var update_deck = ( card, cards, action ) => {
	if( action ) {
		//TODO: handle action
	}
	if( card.constructor === Array ) {
		cards = card;
	}
	else cards.push( card );

	let sorted_cards = sort( cards, 'cmc' );

	update_display( sorted_cards );

};

export { update_deck };
