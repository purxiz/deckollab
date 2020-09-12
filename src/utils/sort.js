const alphaCompare = ( a, b ) => {
	return a.name <= b.name ? -1 : 1;
};

const sort_into_label = ( card, sort_type ) => {
	switch( sort_type ) {
	case 'cmc':
		if( card.convertedManaCost < 8 ) return card.convertedManaCost.toString();
		else return '8+';
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
		sort_func = alphaCompare;
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
	if( sorts.length === 0 ) {
		return cards.sort( alphaCompare );
	}

	const [primary, ...others] = sorts;
	
	const sort_result = bin_sort( cards, primary );

	for ( const label of sort_result.labels ) {
		if ( others.length > 0 ) {
			sort_result.bins[label] = bin_sort( sort_result.bins[label], others );
		} else {
			sort_result.bins[label].sort( alphaCompare );
		}
	}

	return sort_result;
	
};


export { deep_sort };
