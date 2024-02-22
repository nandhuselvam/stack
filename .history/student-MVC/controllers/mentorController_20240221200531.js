const Mentor = require("../models/mentorModel");

expert createMentor = async (req, res) => {
	try {
		await Mentor.create(req.body);
		res.status(201).send("Mentor created sucessfully");
	} catch (error) {
		console.
	}
	}
}