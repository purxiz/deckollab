$('#card_selector').on('keyup paste', (event) => {
	if (event.target.value.length < 3) return;
	$.ajax({
		url: '/api/card_selector',
		data: {
			string: event.target.value
		}
	});
});
