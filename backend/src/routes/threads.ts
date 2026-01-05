// backend/src/routes/threads.ts
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// GET /api/threads - Obtener todos los hilos
router.get('/', async (req, res) => {
    try {
        const threads = await prisma.thread.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true
                    }
                },
                _count: {
                    select: { replies: true } // Cantidad de replies de un thread
                }
            },
            orderBy: {
                lastActivityAt: 'desc' // Ordenar por la actividad mas reciente con el indice
            }
        });

        res.json(threads);
    } catch (error) {
        console.error('Error fetching threads:', error);
        res.status(500).json({ error: 'Failed to fetch threads' });
    }
});

// GET /api/threads/:id - Obtener un hilo específico
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const thread = await prisma.thread.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true
                    }
                },
                replies: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                avatarUrl: true
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'asc'
                    }
                }
            }
        });

        if (!thread) {
            return res.status(404).json({ error: 'Thread not found' });
        }

        res.json(thread);
    } catch (error) {
        console.error('Error fetching thread:', error);
        res.status(500).json({ error: 'Failed to fetch thread' });
    }
});

// POST /api/threads - Crear un nuevo hilo
router.post('/', async (req, res) => {
    try {
        const { title, content, authorId } = req.body;

        if (!title || !content || !authorId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const thread = await prisma.thread.create({
            data: {
                title,
                content,
                authorId
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true
                    }
                }
            }
        });

        res.status(201).json(thread);
    } catch (error) {
        console.error('Error creating thread:', error);
        res.status(500).json({ error: 'Failed to create thread' });
    }
});

// DELETE /api/threads/:id - Eliminar un hilo
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.thread.delete({
            where: { id }
        });

        res.status(204).send();
    } catch (error) {
        console.error('Error deleting thread:', error);
        res.status(500).json({ error: 'Failed to delete thread' });
    }
});

export default router;