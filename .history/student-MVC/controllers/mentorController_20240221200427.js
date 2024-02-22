const Mentor = require("../models/mentorModel");

expert createMentor = async (req, res) => {
	try {
		await Mentor.create(req.body);
		
	}
}