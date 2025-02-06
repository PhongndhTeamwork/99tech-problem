import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from '@route/user.route';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
