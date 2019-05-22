const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// HELP: https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7

// StackOverflow help with password hash: 
// https://stackoverflow.com/questions/14588032/mongoose-password-hashing
// Mongo Documentation:
// https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	destinations: [{
		type: Schema.Types.ObjectId,
		ref: 'Destination'
	}] 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
