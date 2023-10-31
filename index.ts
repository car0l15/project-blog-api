import express from 'express';
import userRouter from './routes/userRoutes';
import categoryRouter from './routes/categoryRoutes';
const sequelize = require('./models').sequelize;

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (_req, res) => {
    res.status(200).send('express + TypeScript UP');
});

app.use('/', userRouter);
app.use('/', categoryRouter);

sequelize.sync({ force: true })

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});