
import mongoose from 'mongoose';



const Connection = () => {
	try {
		mongoose
	} catch (error) {
		console.log('Error while connecting with the database', error.message);

	}
}