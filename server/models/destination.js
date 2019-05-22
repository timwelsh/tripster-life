const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
	label: {
		type: String,
		required: true
	},
	startdate: {
		type: Date,
		required: true
	}
});

const Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;
