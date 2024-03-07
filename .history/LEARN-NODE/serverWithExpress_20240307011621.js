const express = require('express');
const app = express();

const port = 3000;

// Define a route for GET requests to the root URL ('/')

app.get('/', (req, res) => {
	res.send("Hello Arthanari Panneerselvam");
});

app.listen(port, () )
