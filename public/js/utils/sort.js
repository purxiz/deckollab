var sort_into_label = ( card, sort_type ) => {
	switch(sort_type) {
		case 'cmc':
			if(card.convertedManaCost < 8) return card.convertedManaCost.toString();
			else return '8+';
		break;
	}
};

var get_sorted_labels = ( bins, sort_type ) => {
	let sort_func = null;
	switch(sort_type) {
		case 'cmc':
			sort_func = (a, b) => {
				return parseInt(a) - parseInt(b);
			}
			break;
	}
	return Object.keys(bins).sort( sort_func );
};

var deep_alphabetize = ( bins ) => {
	for(let bin in bins) {
		if(bins[bin].constructor === Array) {
			bins[bin] = bins[bin].sort( ( a, b ) => {
				return a.name <= b.name ? -1 : 1;
			});
		}
		else {
			deep_alphabetize(bins[bin]);
		}
	}
	return bins;
};

var sort = (cards, sort_type) => {
	var bins = {};
	cards.forEach( (card) => {
		let label = sort_into_label(card, sort_type);
		if(!bins[label]) {
			bins[label] = [];
		}
		bins[label].push(card);
	});
	return { bins: deep_alphabetize(bins), labels: get_sorted_labels(bins, sort_type)};
};

export { sort }
