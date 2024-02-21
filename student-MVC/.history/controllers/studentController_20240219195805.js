const Student = require("..models/studentModel");


exports.getStudents = async (req, res) => {
	try {

		const students = await Student.find();
		res.render("index", { students });
	} catch (error) {
		console.error(error);
		res.status(500).send("Interval Server Error");
	}
};

exports.createStudents = async (req, res) => {
	try {

		await Student.create(req.body);
		res.render("/");
	} catch (error) {
		console.error(error);
		res.status(500).send("Interval Server Error");
	}
};


exports.deleteStudents = async (req, res) => {
	try {

		await students = await Student.find();
		res.render("index", { students });
	} catch (error) {
		console.error(error);
		res.status(500).send("Interval Server Error");
	}
};