
import mongoose from 'mongoose';



const Connection = () => {
	try {
		mongoose.connect(DB_URI, { useNewUr});
	} catch (error) {
		console.log('Error while connecting with the database', error.message);

	}
}