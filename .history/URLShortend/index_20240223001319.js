const express = require('express');
const app = express();

app.arguments(express.static('public'));

app.get('/',function(req,res){
	res.send('HelloWorld!!')
});
app.listen(3000,function(){
	console.log('The app is listening in PORT 3000')
};)