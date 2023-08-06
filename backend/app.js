import express from 'express';
import cors from 'cors';

import reportRouter from './routes/index.js'
import { connectDatabase } from './database/index.js'

const app = express();
connectDatabase();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/api/data", reportRouter)

const PORT = 8000

app.listen(PORT, (req, res) => {
    console.log(`Server setup done at ${PORT}`)
})