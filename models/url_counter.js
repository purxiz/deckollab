var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
	_id: String,
	counter: Number,
});

module.exports = mongoose.model('url_counter', urlSchema);
