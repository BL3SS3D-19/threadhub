// backend/src/services/user.service.ts
import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';
import { CreateUserDTO, UpdateUserDTO } from '../types/index';

export class UserService {
    /**
     * Obtener todos los usuarios (sin passwords)
     */
    async getAllUsers() {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        threads: true,
                        replies: true,
                    },
                },
            },
        });

        return users.map(user => ({
            ...user,
            threadCount: user._count.threads,
            replyCount: user._count.replies,
            _count: undefined,
        }));
    }

    /**
     * Obtener un usuario por ID
     */
    async getUserById(id: string) {
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        threads: true,
                        replies: true,
                    },
                },
            },
        });

        if (!user) {
            return null;
        }

        return {
            ...user,
            threadCount: user._count.threads,
            replyCount: user._count.replies,
            _count: undefined,
        };
    }

    /**
     * Obtener usuario por username
     */
    async getUserByUsername(username: string) {
        const user = await prisma.user.findUnique({
            where: { username },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return user;
    }

    /**
     * Obtener usuario por email
     */
    async getUserByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return user;
    }

    /**
     * Crear un nuevo usuario
     */
    async createUser(data: CreateUserDTO) {
        // Verificar si el username ya existe
        const existingUsername = await prisma.user.findUnique({
            where: { username: data.username },
        });

        if (existingUsername) {
            throw new Error('Username already exists');
        }

        // Verificar si el email ya existe
        const existingEmail = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingEmail) {
            throw new Error('Email already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
                avatarUrl: data.avatarUrl,
            },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return user;
    }

    /**
     * Actualizar un usuario
     */
    async updateUser(id: string, data: UpdateUserDTO) {
        // Si se está actualizando el username, verificar que no exista
        if (data.username) {
            const existing = await prisma.user.findFirst({
                where: {
                    username: data.username,
                    NOT: { id },
                },
            });

            if (existing) {
                throw new Error('Username already exists');
            }
        }

        // Si se está actualizando el email, verificar que no exista
        if (data.email) {
            const existing = await prisma.user.findFirst({
                where: {
                    email: data.email,
                    NOT: { id },
                },
            });

            if (existing) {
                throw new Error('Email already exists');
            }
        }

        const user = await prisma.user.update({
            where: { id },
            data: {
                ...data,
                updatedAt: new Date(),
            },
            select: {
                id: true,
                username: true,
                email: true,
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return user;
    }

    /**
     * Eliminar un usuario
     */
    async deleteUser(id: string) {
        await prisma.user.delete({
            where: { id },
        });
    }

    /**
     * Verificar password (para login)
     */
    async verifyPassword(userId: string, password: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { password: true },
        });

        if (!user) {
            return false;
        }

        return bcrypt.compare(password, user.password);
    }

    /**
     * Obtener actividad del usuario (hilos y respuestas recientes)
     */
    async getUserActivity(userId: string, limit: number = 10) {
        const [threads, replies] = await Promise.all([
            prisma.thread.findMany({
                where: { authorId: userId },
                include: {
                    _count: {
                        select: { replies: true },
                    },
                },
                orderBy: { createdAt: 'desc' },
                take: limit,
            }),
            prisma.reply.findMany({
                where: { authorId: userId },
                include: {
                    thread: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
                take: limit,
            }),
        ]);

        return { threads, replies };
    }

    async login(email: string, password: string) {
        // 1. Buscar usuario por email
        const user = await prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                username: true,
                email: true,
                password: true, // necesitamos el hash para comparar
                avatarUrl: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            throw new Error('Email not found');
        }

        // 2. Verificar password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }

        // 3. Devolver datos del usuario sin password
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}


export default new UserService();