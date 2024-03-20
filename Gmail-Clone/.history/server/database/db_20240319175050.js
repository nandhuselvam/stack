import  mongoose  from "mongoose";


const Connection = () => {
	const  DB_URI = `mongodb://username>:username1234@ac-jkuxuxq-shard-00-00.wwx4qw4.mongodb.net:27017,ac-jkuxuxq-shard-00-01.wwx4qw4.mongodb.net:27017,ac-jkuxuxq-shard-00-02.wwx4qw4.mongodb.net:27017/?ssl=true&replicaSet=atlas-tqolgf-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;
	try {
		mongoose.connect(DB_URI, { useNewUrlParser: true });
		console.log('Database connected successfully');

	} catch(error) {
		console.log('Error while connecting with the database', error.message);
	}
} 

export default Connection;