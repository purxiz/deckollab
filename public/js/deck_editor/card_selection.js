var add_input_listener = (id, update_deck, cards) => {
	$('#' + id).on('keyup paste', (event) => {
		if (event.target.value.length < 4) {
			$('#card_list').empty();
			return;
		}
		$.ajax({
			url: '/api/card_selector',
			data: {
				string: event.target.value
			}
		})
		.then( (response) => {
			if(response.length < $('#card_selector').val().length) return;
			$('#card_list').empty();
			response.data.forEach( (card) => {
				$('#card_list')
				.append(
					$('<div>').html(card[0].name).addClass('list_item').click( (event) => {
						update_deck(card[0], cards);
					})
				);
			});
		});
	});
}

export { add_input_listener }
