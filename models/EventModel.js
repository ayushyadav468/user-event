const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, required: true },
	createrID: { type: mongoose.Schema.Types.ObjectId, required: true },
	title: {
		type: String,
		min: 3,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		min: 10,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	noOfUserJoined: {
		type: Number,
		default: 0
	},
	rating: {
		type: Number,
		default: 0
	},
	reviews: { type: [mongoose.Schema.Types.ObjectId] },
	dateCreated: {
		type: Date,
		required: true
	}
});

module.exports = mongoose.model('events', eventSchema);
