$('#card_selector').on('keyup paste', (event) => {
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
				$('<div>').html(card[0].name).css('width', '100%').click( (event) => {
					updateCardDisplay(card[0]);
				})
			);
		});
	});
});
