// backend/src/routes/thread.routes.ts
import { Router } from 'express';
import threadController from '../controllers/threads.controller';

const router = Router();



// Rutas de hilos
router.get('/', threadController.getAllThreads.bind(threadController));
router.get('/:id', threadController.getThreadById.bind(threadController));
router.post('/', threadController.createThread.bind(threadController));
router.patch('/:id', threadController.updateThread.bind(threadController));
router.delete('/:id', threadController.deleteThread.bind(threadController));

// Rutas adicionales
router.get('/user/:userId', threadController.getThreadsByUser.bind(threadController));

export default router;