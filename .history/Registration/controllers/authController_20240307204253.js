const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.Register = async (req, res) => {
	try {
		const { username, password } = req.body;
		let user = await User.findOne({ username});
		if(user) {
			return res.status(400).jso
		}
	}
}