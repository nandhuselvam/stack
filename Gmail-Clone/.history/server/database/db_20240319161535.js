import  Mongoose  from "mongoose";


const Connection = () => {
	const  DB_URI = ``;
	try {
		mongoose.connect(DB_URI, { useNewUrlParser: true });

	} catch(error) {
		console.log('Error while connecting with the database', error.message);
	}
} 