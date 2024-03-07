const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../models/");

exports.Register = async (req, res)