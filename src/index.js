import express from 'express';
import dotenv from 'dotenv';
import BlogRouter from './routes/blogRouter';
import UserRouter from './routes/userRouter';

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use('/blog', BlogRouter);
app.use('/users', UserRouter);
app.use((req, res) => {
  res.json({ success: 'error', message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
