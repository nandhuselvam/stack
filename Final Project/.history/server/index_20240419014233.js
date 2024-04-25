import express from 'express';
import Connection.j from './database/db';

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));