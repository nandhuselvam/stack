import express from 'express';
import Connection from './database/db.js';
import routes from './routes/routes.js';
import cors from 'cors';


const app = express();
app.use(cors());

app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));