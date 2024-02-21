const Student = require("..models/studentModel");


exports.getStudents = async (req, res) => {
	try {

		const students = await Student.find();
		res.render("index", { students });
	} catch (error) {
		console.error(error);
		res.status(500).send
		()
	}
}