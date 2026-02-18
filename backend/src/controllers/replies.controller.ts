// backend/src/controllers/reply.controller.ts
import { Request, Response } from 'express';
import replyService from '../services/replies.service';
import { CreateReplyDTO } from '../types';

export class RepliesController {
    /**
     * GET /api/replies
     * Obtener respuestas con filtros opcionales
     */
    async getReplies(req: Request, res: Response) {
        try {
            const { threadId, authorId, limit } = req.query;

            const filters = {
                threadId: threadId as string,
                authorId: authorId as string,
                limit: limit ? parseInt(limit as string) : undefined,
            };

            const replies = await replyService.getReplies(filters);
            res.json(replies);
        } catch (error) {
            console.error('Error fetching replies:', error);
            res.status(500).json({ error: 'Failed to fetch replies' });
        }
    }

    /**
     * GET /api/replies/:id
     * Obtener una respuesta específica
     */
    async getReplyById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reply = await replyService.getReplyById(id);

            if (!reply) {
                return res.status(404).json({ error: 'Reply not found' });
            }

            res.json(reply);
        } catch (error) {
            console.error('Error fetching reply:', error);
            res.status(500).json({ error: 'Failed to fetch reply' });
        }
    }

    /**
     * GET /api/replies/thread/:threadId
     * Obtener todas las respuestas de un hilo
     */
    async getRepliesByThread(req: Request, res: Response) {
        try {
            const { threadId } = req.params;
            const replies = await replyService.getRepliesByThread(threadId);
            res.json(replies);
        } catch (error) {
            console.error('Error fetching thread replies:', error);
            res.status(500).json({ error: 'Failed to fetch thread replies' });
        }
    }

    /**
     * GET /api/replies/user/:userId
     * Obtener todas las respuestas de un usuario
     */
    async getRepliesByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const replies = await replyService.getRepliesByUser(userId);
            res.json(replies);
        } catch (error) {
            console.error('Error fetching user replies:', error);
            res.status(500).json({ error: 'Failed to fetch user replies' });
        }
    }

    /**
     * POST /api/replies
     * Crear una nueva respuesta
     */
    async createReply(req: Request, res: Response) {
        try {
            const { content, threadId, authorId }: CreateReplyDTO = req.body;

            // Validación básica
            if (!content || !threadId || !authorId) {
                return res.status(400).json({
                    error: 'Missing required fields: content, threadId, authorId'
                });
            }

            if (content.length < 1) {
                return res.status(400).json({
                    error: 'Content cannot be empty'
                });
            }

            if (content.length > 5000) {
                return res.status(400).json({
                    error: 'Content must be less than 5000 characters'
                });
            }

            const reply = await replyService.createReply({ content, threadId, authorId });
            res.status(201).json(reply);
        } catch (error: any) {
            console.error('Error creating reply:', error);

            if (error.message === 'Thread not found') {
                return res.status(404).json({ error: error.message });
            }

            if (error.message === 'User not found') {
                return res.status(404).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to create reply' });
        }
    }

    /**
     * PATCH /api/replies/:id
     * Actualizar una respuesta
     */
    async updateReply(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { content } = req.body;

            if (!content) {
                return res.status(400).json({ error: 'Content is required' });
            }

            if (content.length < 1 || content.length > 5000) {
                return res.status(400).json({
                    error: 'Content must be between 1 and 5000 characters'
                });
            }

            const reply = await replyService.updateReply(id, content);
            res.json(reply);
        } catch (error: any) {
            console.error('Error updating reply:', error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Reply not found' });
            }

            res.status(500).json({ error: 'Failed to update reply' });
        }
    }

    /**
     * DELETE /api/replies/:id
     * Eliminar una respuesta
     */
    async deleteReply(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await replyService.deleteReply(id);
            res.status(204).send();
        } catch (error: any) {
            console.error('Error deleting reply:', error);

            if (error.message === 'Reply not found') {
                return res.status(404).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to delete reply' });
        }
    }

    /**
     * GET /api/replies/thread/:threadId/count
     * Contar respuestas de un hilo
     */
    async countRepliesByThread(req: Request, res: Response) {
        try {
            const { threadId } = req.params;
            const count = await replyService.countRepliesByThread(threadId);
            res.json({ count });
        } catch (error) {
            console.error('Error counting replies:', error);
            res.status(500).json({ error: 'Failed to count replies' });
        }
    }
}

export default new RepliesController();