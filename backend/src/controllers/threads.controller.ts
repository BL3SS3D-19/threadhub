// backend/src/controllers/thread.controller.ts
import { Request, Response } from 'express';
import threadService from '../services/threads.service';
import { CreateThreadDTO, UpdateThreadDTO } from '../types';

export class ThreadsController {
    /**
     * GET /api/threads
     * Obtener todos los hilos con filtros opcionales
     */
    async getAllThreads(req: Request, res: Response) {
        try {
            const { authorId, search, limit, offset } = req.query;

            const filters = {
                authorId: authorId as string,
                search: search as string,
                limit: limit ? parseInt(limit as string) : undefined,
                offset: offset ? parseInt(offset as string) : undefined,
            };

            const threads = await threadService.getAllThreads(filters);
            res.json(threads);
        } catch (error) {
            console.error('Error fetching threads:', error);
            res.status(500).json({ error: 'Failed to fetch threads' });
        }
    }

    /**
     * GET /api/threads/:id
     * Obtener un hilo específico por ID
     */
    async getThreadById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const thread = await threadService.getThreadById(id);

            if (!thread) {
                return res.status(404).json({ error: 'Thread not found' });
            }

            res.json(thread);
        } catch (error) {
            console.error('Error fetching thread:', error);
            res.status(500).json({ error: 'Failed to fetch thread' });
        }
    }

    /**
     * POST /api/threads
     * Crear un nuevo hilo
     */
    async createThread(req: Request, res: Response) {
        try {
            const { title, content, authorId }: CreateThreadDTO = req.body;

            // Validación básica
            if (!title || !content || !authorId) {
                return res.status(400).json({
                    error: 'Missing required fields: title, content, authorId'
                });
            }

            if (title.length < 3 || title.length > 255) {
                return res.status(400).json({
                    error: 'Title must be between 3 and 255 characters'
                });
            }

            if (content.length < 10) {
                return res.status(400).json({
                    error: 'Content must be at least 10 characters'
                });
            }

            const thread = await threadService.createThread({ title, content, authorId });
            res.status(201).json(thread);
        } catch (error: any) {
            console.error('Error creating thread:', error);

            if (error.message === 'User not found') {
                return res.status(404).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to create thread' });
        }
    }

    /**
     * PATCH /api/threads/:id
     * Actualizar un hilo
     */
    async updateThread(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: UpdateThreadDTO = req.body;

            // Validación
            if (data.title && (data.title.length < 3 || data.title.length > 255)) {
                return res.status(400).json({
                    error: 'Title must be between 3 and 255 characters'
                });
            }

            if (data.content && data.content.length < 10) {
                return res.status(400).json({
                    error: 'Content must be at least 10 characters'
                });
            }

            const thread = await threadService.updateThread(id, data);
            res.json(thread);
        } catch (error: any) {
            console.error('Error updating thread:', error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Thread not found' });
            }

            res.status(500).json({ error: 'Failed to update thread' });
        }
    }

    /**
     * DELETE /api/threads/:id
     * Eliminar un hilo
     */
    async deleteThread(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await threadService.deleteThread(id);
            res.status(204).send();
        } catch (error: any) {
            console.error('Error deleting thread:', error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Thread not found' });
            }

            res.status(500).json({ error: 'Failed to delete thread' });
        }
    }

    /**
     * GET /api/threads/user/:userId
     * Obtener hilos de un usuario específico
     */
    async getThreadsByUser(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const threads = await threadService.getThreadsByUser(userId);
            res.json(threads);
        } catch (error) {
            console.error('Error fetching user threads:', error);
            res.status(500).json({ error: 'Failed to fetch user threads' });
        }
    }
}

export default new ThreadsController();