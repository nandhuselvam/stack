const express = require('express');
const app = express();



app.get('/',function(req,res){
	res.send('HelloWorld!!')

})
app.listen(3000)