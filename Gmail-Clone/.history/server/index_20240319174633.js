import express from 'express';
import Connection from './database/db';
import routes from './routes/routes';
import cors from 'c'


const app = express();
app.use(cors());
app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));