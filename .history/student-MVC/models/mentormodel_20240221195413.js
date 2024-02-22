const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
	name: String,
	speciality: String,
});

mod