const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.Register = async (req, res) => {
	try {
		const {username, password} = req.body;
		
	}
}