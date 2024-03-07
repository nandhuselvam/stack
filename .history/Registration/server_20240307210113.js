const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config();

const app = express();


mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log("connect to MongoDB."))
.catch((err) => console.error("Could not connect to MongoDB", err))

app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));

//start the server

const PORT = process.env.