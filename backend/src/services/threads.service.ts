import prisma from "../lib/prisma";

import { CreateThreadDTO, UpdateThreadDTO, ThreadFilters, ThreadResponse } from "../types/index";

import { Prisma } from "@prisma/client"

// Tipo de un thread devuelto por Prisma con author y _count
type ThreadWithCount = Awaited<
    ReturnType<typeof prisma.thread.findMany>
>[number];

export class ThreadService {


    async getAllThreads(filters?: ThreadFilters) {
        const { authorId, search, limit = 20, offset = 0 } = filters || {};
        const where: any = {};

        //Filtrar por autor si se especifica
        if (authorId) {
            where.authorId = authorId;
        }

        //Filtrar por titulo y contenido si se especifica
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } }
            ];
        }

        const threads = await prisma.thread.findMany({
            where,
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true
                    },
                },
                _count: {
                    select: { replies: true }
                },
            },
            orderBy: {
                lastActivityAt: 'desc'
            },
            take: limit,
            skip: offset,
        });

        //Mapear para incluir replyCount
        return threads.map((thread: ThreadWithCount) => ({
            ...thread,
            replyCount: thread._count.replies,
        }));
    }

    //Obtener un hilo por id con sus respuestas
    async getThreadById(id: string) {
        const thread = await prisma.thread.findUnique({
            where: { id },
            include: {
                author: {
                    select: {
                        id: true,
                        username: true,
                        avatarUrl: true
                    },
                },
                replies: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                username: true,
                                avatarUrl: true
                            },
                        },
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                },
                _count: {
                    select: { replies: true },
                }
            },
        });

        if (!thread) {
            return null;
        }

        return {
            ...thread,
            replyCount: thread._count.replies,
            _count: undefined,
        };
    }
    async createThread(data: CreateThreadDTO) {
        // Verificar que el usuario existe
        const user = await prisma.user.findUnique({
            where: { id: data.authorId },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const thread = await prisma.thread.create({
            data: {
                title: data.title,
                content: data.content,
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
            },
        });

        return thread;
    }

    /**
     * Actualizar un hilo
     */
    async updateThread(id: string, data: UpdateThreadDTO) {
        const thread = await prisma.thread.update({
            where: { id },
            data: {
                ...data,
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

        return thread;
    }

    /**
     * Eliminar un hilo
     */
    async deleteThread(id: string) {
        await prisma.thread.delete({
            where: { id },
        });
    }

    /**
     * Obtener hilos más recientes
     */
    async getRecentThreads(limit: number = 10) {
        return this.getAllThreads({ limit });
    }

    /**
     * Obtener hilos de un usuario
     */
    async getThreadsByUser(userId: string) {
        return this.getAllThreads({ authorId: userId });
    }
}

export default new ThreadService();




