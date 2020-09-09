var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlCounter = require('./url_counter');

var deckSchema = new Schema({
	name: { type: String },
	cards: [{
		uuid: { type: String },
	}],
	url: { type: String, required: true },
});

deckSchema.pre('save', function (next) {
	var self = this;
	urlCounter.findByIdAndUpdate('the_only_one', { $inc: {counter: 1}})
	.exec( (err, docs) => {
		if(docs === null) {
			var counter = new urlCounter({
				_id: 'the_only_one',
				counter: 10
			});
			counter.save().then( () => {
				self.url = '10';
				next();
			});
		}
		else {
			self.url = docs.counter.toString();
			next();
		}
	});
});

module.exports = mongoose.model('deck', deckSchema);
