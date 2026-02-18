// src/index.ts
import express from 'express';
import cors from 'cors';
import threadsRoutes from './routes/threads.routes';
import repliesRoutes from './routes/replies.routes';
import userRoutes from './routes/users.routes';

const app = express();


// Middlewares
app.use(cors({
    origin: ['http://localhost:5173'], // frontend dev server
    credentials: true,
}));
app.use(express.json());

// Rutas
app.use('/api/threads', threadsRoutes);
app.use('/api/replies/', repliesRoutes);
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const PORT = parseInt(process.env.PORT || '3000');
app.listen(PORT, '0.0.0.0', () => {
    console.log(` Server running on http://0.0.0.0:${PORT}`);
});
