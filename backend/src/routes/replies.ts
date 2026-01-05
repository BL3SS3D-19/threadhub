// backend/src/routes/replies.ts
import { Router } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// POST /api/replies - Crear respuesta
router.post('/', async (req, res) => {
    try {
        const { content, threadId, authorId } = req.body;

        if (!content || !threadId || !authorId) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Usar transacción para crear reply y actualizar thread
        const result = await prisma.$transaction(async (tx: PrismaClient) => {
            // Crear reply
            const reply = await tx.reply.create({
                data: {
                    content,
                    threadId,
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

            // Actualizar lastActivityAt del thread
            await tx.thread.update({
                where: { id: threadId },
                data: { lastActivityAt: new Date() }
            });

            return reply;
        });

        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating reply:', error);
        res.status(500).json({ error: 'Failed to create reply' });
    }
});

export default router;