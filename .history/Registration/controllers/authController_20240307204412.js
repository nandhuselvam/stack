const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.Register = async (req, res) => {
	try {
		const { username, password } = req.body;
		let user = await User.findOne({ username});
		if(user) {
			return res.status(400).json({msg: "User already exits"});
		}
		user = new User ({ username, password});

		const salt = await b
	}
}