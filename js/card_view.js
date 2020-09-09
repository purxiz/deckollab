var cards = [];

var cmc_sort = ( card ) => {
	if(card.convertedManaCost < 8) return card.convertedManaCost.toString();
	else return '8+';
};

var sort = (cards, sortIntoLabel) => {
	var labels = {};
	cards.forEach( (card) => {
		let label = sortIntoLabel(card);
		if(!labels[label]) {
			labels[label] = [];
		}
		labels[label].push(card);
	});
	return labels;
};

var initCardDisplay = ( card ) => {
	if(card.constructor === Array) cards.concat(card);
	else cards.push(card);

	let sorted_cards = sort(cards, cmc_sort);
	
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
