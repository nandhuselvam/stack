// const Mentor = require("../models/mentorModel");

exports.createMentor = async (req, res) => {
	try {
		await Mentor.create(req.body);
		res.status(201).send("Mentor created sucessfully");
	} catch (error) {
		console.error(error);
		res.status(500).send("Interval Server Error");
	}
	};

