var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({
	name: { type: String },
	cards: [{
		uuid: { type: String },
	}],
	url: { type: String, required: true },
});
