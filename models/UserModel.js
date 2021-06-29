const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: { type: mongoose.Schmea.Types.ObjectId, required: true },
	firstName: { type: String, min: 3, required: true },
	lastName: { type: String },
	email: { type: String, min: 3, required: true },
	password: { type: String, min: 6, required: true },
	age: { type: Number, required: true },
	gender: { type: String, required: true },
	eventsJoined: { type: [mongoose.Types.ObjectId] },
	eventsCreated: { type: [mongoose.Types.ObjectId] },
	dateCreated: { type: Date, required: true }
});

module.exports = mongoose.model('users', userSchema);
