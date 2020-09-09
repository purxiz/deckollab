var cards = [];

var cmc_sort = ( card ) => {
	if(card.convertedManaCost < 8) return card.convertedManaCost.toString();
	else return '11';
};

var cmc_sort_labels = (a, b) => {
	return parseInt(a) - parseInt(b);
};

var sort = (cards, sortIntoLabel, labelOrder) => {
	var labels = {};
	cards.forEach( (card) => {
		let label = sortIntoLabel(card);
		if(!labels[label]) {
			labels[label] = [];
		}
		labels[label].push(card);
	});
	//labels.sort( labelOrder );
	return labels;
};

var initCardDisplay = ( card ) => {
	if(card.constructor === Array) cards.concat(card);
	else cards.push(card);

	let sorted_cards = sort(cards, cmc_sort, cmc_sort_labels);
	
	$('#maindeck').empty();
	
	for (label in sorted_cards) {
		
		let $title = $('<div>').addClass('category')
		.append(
			$('<h3>').css('text-align', 'center').html(label)
		);
		
		$('#maindeck')
		.append(
			$title
		);
		
		sorted_cards[label].forEach( (card) => {
			$title.append($('<div>').html(card.name).addClass('list_item'));
		});

	}
};
