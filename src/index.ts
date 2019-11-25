import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => res.sendStatus(200));

app.listen(process.env.PORT);
