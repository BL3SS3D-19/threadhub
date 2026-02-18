// backend/src/routes/reply.routes.ts
import { Router } from 'express';
import replyController from '../controllers/replies.controller';

const router = Router();

// Rutas de respuestas
router.get('/', replyController.getReplies.bind(replyController));
router.get('/:id', replyController.getReplyById.bind(replyController));
router.post('/', replyController.createReply.bind(replyController));
router.patch('/:id', replyController.updateReply.bind(replyController));
router.delete('/:id', replyController.deleteReply.bind(replyController));

// Rutas adicionales
router.get('/thread/:threadId', replyController.getRepliesByThread.bind(replyController));
router.get('/user/:userId', replyController.getRepliesByUser.bind(replyController));
router.get('/thread/:threadId/count', replyController.countRepliesByThread.bind(replyController));

export default router;