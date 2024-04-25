
import mongoose from 'mongoose';



const Connection = () => {
	const DB_URI = `mongodb+srv://nandhuselvam1997:Arthunandhu297@@finalproject.u9kpby2.mongodb.net/?retryWrites=true&w=majority&appName=FinalProject`;

	try {
		mongoose.connect(DB_URI, { useNewUrlParser: true });
		console.log('Database connected successfully');
	} catch (error) {
		console.log('Error while connecting with the database', error.message);

	}
}