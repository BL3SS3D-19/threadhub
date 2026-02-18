// backend/src/controllers/user.controller.ts
import { Request, Response } from 'express';
import userService from '../services/users.service';
import { CreateUserDTO, UpdateUserDTO } from '../types';

export class UsersController {
    /**
     * GET /api/users
     * Obtener todos los usuarios
     */
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }

    /**
     * GET /api/users/:id
     * Obtener un usuario por ID
     */
    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    /**
     * GET /api/users/username/:username
     * Obtener usuario por username
     */
    async getUserByUsername(req: Request, res: Response) {
        try {
            const { username } = req.params;
            const user = await userService.getUserByUsername(username);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }

    /**
     * POST /api/users/register
     * Crear un nuevo usuario
     */
    async createUser(req: Request, res: Response) {
        try {
            const { username, email, password, avatarUrl }: CreateUserDTO = req.body;

            // Validación básica
            if (!username || !email || !password) {
                return res.status(400).json({
                    error: 'Missing required fields: username, email, password'
                });
            }

            // Validar username
            if (username.length < 3 || username.length > 50) {
                return res.status(400).json({
                    error: 'Username must be between 3 and 50 characters'
                });
            }

            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }

            // Validar password
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password must be at least 6 characters'
                });
            }

            const user = await userService.createUser({
                username,
                email,
                password,
                avatarUrl
            });

            res.status(201).json(user);
        } catch (error: any) {
            console.error('Error creating user:', error);

            if (error.message === 'Username already exists') {
                return res.status(409).json({ error: error.message });
            }

            if (error.message === 'Email already exists') {
                return res.status(409).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to create user' });
        }
    }

    /**
     * PATCH /api/users/:id
     * Actualizar un usuario
     */
    async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: UpdateUserDTO = req.body;

            // Validaciones
            if (data.username && (data.username.length < 3 || data.username.length > 50)) {
                return res.status(400).json({
                    error: 'Username must be between 3 and 50 characters'
                });
            }

            if (data.email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) {
                    return res.status(400).json({ error: 'Invalid email format' });
                }
            }

            const user = await userService.updateUser(id, data);
            res.json(user);
        } catch (error: any) {
            console.error('Error updating user:', error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'User not found' });
            }

            if (error.message === 'Username already exists' || error.message === 'Email already exists') {
                return res.status(409).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to update user' });
        }
    }

    /**
     * DELETE /api/users/:id
     * Eliminar un usuario
     */
    async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await userService.deleteUser(id);
            res.status(204).send();
        } catch (error: any) {
            console.error('Error deleting user:', error);

            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(500).json({ error: 'Failed to delete user' });
        }
    }

    /**
     * GET /api/users/:id/activity
     * Obtener actividad del usuario (hilos y respuestas)
     */
    async getUserActivity(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { limit } = req.query;

            const activity = await userService.getUserActivity(
                id,
                limit ? parseInt(limit as string) : undefined
            );

            res.json(activity);
        } catch (error) {
            console.error('Error fetching user activity:', error);
            res.status(500).json({ error: 'Failed to fetch user activity' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const user = await userService.login(email, password);
            res.json(user); // devuelve el usuario sin password
        } catch (error: any) {
            console.error('Login error:', error.message);

            if (error.message === 'Email not found' || error.message === 'Invalid password') {
                return res.status(401).json({ error: error.message });
            }

            res.status(500).json({ error: 'Failed to login' });
        }
    }
}

export default new UsersController();