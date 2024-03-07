const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const User = require("../models/u");

exports.Register = async (req, res)