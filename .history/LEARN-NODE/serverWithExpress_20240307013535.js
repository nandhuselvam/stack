const express = require('express');
const app = express();

const port = 3000;

// Define a route for GET requests to the root URL ('/')

app.get("/", (req, res) => {
	res.send(
		"(From Express)-Hello, World!\n Welcome, FSDWD-2 Tamil Batch People!!!"
		);
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}/`);
});
