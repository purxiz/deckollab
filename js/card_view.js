var cards = [];

var cmc_sort = ( card ) => {
	if(card.convertedManaCost < 8) return card.convertedManaCost.toString();
	else return '8+';
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

var updateCardDisplay = ( card ) => {
	cards.push(card);
	let sorted_cards = sort(cards, cmc_sort, cmc_sort_labels);
	console.log(sorted_cards);
	$('#maindeck').empty();
	for (label in sorted_cards) {
		let $title = $('<div>').css('display', 'flex').css('flex-direction', 'column').css('padding', '0 15px 15px').css('max-width', '21%')
			.append(
				$('<h3>').css('text-align', 'center').html(label)
			);
		$('#maindeck')
		.append(
			$title
		);
		sorted_cards[label].forEach( (card) => {
			$title.append($('<div>').html(card.name));
		});
	}
};
