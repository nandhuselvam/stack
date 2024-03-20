import express from 'express';
import Connection from './database/db';
import routes from './routes/routes';

const app = express();

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));