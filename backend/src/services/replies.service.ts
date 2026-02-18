// backend/src/services/reply.service.ts
import prisma from '../lib/prisma';
import { CreateReplyDTO, ReplyFilters } from '../types/index';

export class ReplyService {
    /**
     * Obtener respuestas con filtros
     */
    async getReplies(filters?: ReplyFilters) {
        const { threadId, authorId, limit = 50 } = filters || {};

        const where: any = {};

        if (threadId) {
            where.threadId = threadId;
        }

        if (authorId) {
            where.authorId = authorId;
        }

        const replies = await prisma.reply.findMany({
            where,
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true,
                    },
                },
                thread: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'asc',
            },
            take: limit,
        });

        return replies;
    }

    /**
     * Obtener una respuesta por ID
     */
    async getReplyById(id: string) {
        const reply = await prisma.reply.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true,
                    },
                },
                thread: {
                    select: {
                        id: true,
                        title: true,
                    },
                },
            },
        });

        return reply;
    }

    /**
     * Obtener respuestas de un hilo específico
     */
    async getRepliesByThread(threadId: string) {
        return this.getReplies({ threadId });
    }

    /**
     * Obtener respuestas de un usuario específico
     */
    async getRepliesByUser(userId: string) {
        return this.getReplies({ authorId: userId });
    }

    /**
     * Crear una nueva respuesta
     */
    async createReply(data: CreateReplyDTO) {
        // Verificar que el hilo existe
        const thread = await prisma.thread.findUnique({
            where: { id: data.threadId },
        });

        if (!thread) {
            throw new Error('Thread not found');
        }

        // Verificar que el usuario existe
        const user = await prisma.user.findUnique({
            where: { id: data.authorId },
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Usar transacción para crear la respuesta y actualizar el hilo
        const reply = await prisma.$transaction(async (tx) => {
            // Crear la respuesta
            const newReply = await tx.reply.create({
                data: {
                    content: data.content,
                    threadId: data.threadId,
                    authorId: data.authorId,
                },
                include: {
                    author: {
                        select: {
                            id: true,
                            username: true,
                            avatarUrl: true,
                        },
                    },
                    thread: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
            });

            // Actualizar lastActivityAt del hilo
            await tx.thread.update({
                where: { id: data.threadId },
                data: {
                    lastActivityAt: new Date(),
                },
            });

            return newReply;
        });

        return reply;
    }

    /**
     * Actualizar una respuesta
     */
    async updateReply(id: string, content: string) {
        const reply = await prisma.reply.update({
            where: { id },
            data: {
                content,
                updatedAt: new Date(),
            },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true,
                    },
                },
            },
        });

        return reply;
    }

    /**
     * Eliminar una respuesta
     */
    async deleteReply(id: string) {
        // Obtener el threadId antes de eliminar
        const reply = await prisma.reply.findUnique({
            where: { id },
            select: { threadId: true },
        });

        if (!reply) {
            throw new Error('Reply not found');
        }

        // Eliminar la respuesta
        await prisma.reply.delete({
            where: { id },
        });

        // Actualizar el lastActivityAt del hilo
        const latestReply = await prisma.reply.findFirst({
            where: { threadId: reply.threadId },
            orderBy: { createdAt: 'desc' },
        });

        await prisma.thread.update({
            where: { id: reply.threadId },
            data: {
                lastActivityAt: latestReply?.createdAt || new Date(),
            },
        });
    }

    /**
     * Contar respuestas de un hilo
     */
    async countRepliesByThread(threadId: string): Promise<number> {
        return prisma.reply.count({
            where: { threadId },
        });
    }
}

export default new ReplyService();