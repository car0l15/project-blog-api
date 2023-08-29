import express from 'express';
import { json } from 'express';

const app = express();

app.use(express.json());

app.use('/', require('../Routes'))

export default app;