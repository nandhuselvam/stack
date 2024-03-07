const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	usename: {type: String, required}
})