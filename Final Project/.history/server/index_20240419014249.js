import express from 'express';
import Connection from './database/db.js';

const app = express();

const PORT = 8000;
c

app.listen(PORT, () => console.log(`Server is started on PORT ${PORT}`));