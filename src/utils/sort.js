const alphaCompare = ( a, b ) => {
	return a.name <= b.name ? -1 : 1;
};

const sort_into_label = ( card, sort_type ) => {
	switch( sort_type ) {
	case 'cmc':
		if( card.convertedManaCost < 8 ) return card.convertedManaCost.toString();
		else return '8+';
	case 'type':
		var types = card.type.split( ' - ' )[0].split( ' ' );
		if( types.indexOf( 'Creature' ) > -1 ) return 'Creature';
		else if( types.indexOf( 'Artifact' ) > -1 ) return 'Artifact';
		else if( types.indexOf( 'Enchantment' ) > -1 ) return 'Enchantment';
		else if( types.indexOf( 'Land' ) > -1 ) return 'Land';
		else if( types.indexOf( 'Planeswalker' ) > -1 ) return 'Planeswalker';
		else if( types.indexOf( 'Instant' ) > -1 ) return 'Instant';
		else if( types.indexOf( 'Sorcery' ) > -1 ) return 'Sorcery';
		else if( types.indexOf( 'Tribal' ) > -1 ) return 'Tribal';
		else return types[0];
	}
};

const get_sorted_labels = ( bins, sort_type ) => {
	let sort_func;
	switch( sort_type ) {
	case 'cmc':
		sort_func = ( a, b ) => {
			return parseInt( a ) - parseInt ( b );
		};
		break;
	default:
		sort_func = ( a, b ) => {
			return a <= b ? -1 : 1;
		};
		break;
	}
	return Object.keys( bins ).sort( sort_func );
};

const bin_sort = ( cards, sort_type ) => {
	let bins = {};

	cards.forEach( ( card ) => {
		const label = sort_into_label( card, sort_type );
		if ( !bins[label] ) {
			bins[label] = [];
		}
		bins[label].push( card );
	} );

	return { bins: bins, labels: get_sorted_labels( bins, sort_type ) };
};

const deep_sort = ( cards, sorts ) => {
	const no_dupes = [...new Set( sorts.filter( ( val ) => val !== '' ) )];
	
	if( no_dupes.length === 0 ) {
		return { bins: {cards: cards.sort( alphaCompare )}, labels: ['cards'] };
	}


	const [primary, ...others] = no_dupes;
	
	const sort_result = bin_sort( cards, primary );

	for ( const label of sort_result.labels ) {
		if ( others.length > 0 ) {
			sort_result.bins[label] = bin_sort( sort_result.bins[label], ...others );
		} else {
			sort_result.bins[label].sort( alphaCompare );
		}
	}
	return sort_result;
	
};


export { deep_sort };
