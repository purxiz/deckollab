$('#card_selector').on('keyup paste', (event) => {
	if (event.target.value.length < 3) {
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
		$('#card_list').empty();
		response.forEach( (card) => {
			console.log(card);
			$('#card_list').append($('<div>').html(card[0].name));
		});
	});
});
