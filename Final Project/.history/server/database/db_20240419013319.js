
import mongoose from 'mongoose';



const Connection = () => {
constDD

	try {
		mongoose.connect(DB_URI, { useNewUrlParser: true });
	} catch (error) {
		console.log('Error while connecting with the database', error.message);

	}
}