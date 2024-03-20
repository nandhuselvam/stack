import  Mongoose  from "mongoose";


const Connection = () => {

	try {
		mongoose.connect(DB_URI, { useNewUrlParser});

	} catch(error) {
		console.log('Error while connecting with the database', error.message);
	}
} 