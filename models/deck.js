var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mealSchema = new Schema({
	name: { type: String, required: true },
	cards: [{
		uuid: { type: String },
	}]
});
