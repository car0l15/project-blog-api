import express from 'express';
import userRouter from './routes/userRoutes';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req, res) => {
    res.status(200).send('express + TypeScript UP');
});

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});