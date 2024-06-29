import express from 'express';
import eventRoutes from './routes/eventRoutes';
import registrationRoutes from './routes/registrationRoutes';
import userRoutes from './routes/userRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);
app.use('/api/users', userRoutes);

app.use(errorMiddleware);

export default app;
