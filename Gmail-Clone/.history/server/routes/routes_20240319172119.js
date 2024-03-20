import express from 'express';
import { saveSentEmails } from '../controller/email-controller';


const routes = express.Router();

routes.post('/save', saveSentEmails)


export  default