// frontend/src/services/users.service.ts
import { http } from '../lib/http';
import { CreateUserDTO, UserResponse } from '../lib/types';

export const usersService = {

    /**
     * Registrar un nuevo usuario
     */
    async register(data: CreateUserDTO): Promise<UserResponse> {
        return http<UserResponse>('/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },

    /**
     * Login de usuario
     * Nota: aquí enviamos email y password y esperamos que el backend
     * devuelva un UserResponse si es correcto.
     */
    async login(email: string, password: string): Promise<UserResponse> {
        return http<UserResponse>('/api/users/login', { // asumimos ruta /api/auth/login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
    },

    /**
     * Obtener usuario por ID
     */
    async getUserById(id: string): Promise<UserResponse> {
        return http<UserResponse>(`/api/users/${id}`);
    },

    /**
     * Obtener usuario por username
     */
    async getUserByUsername(username: string): Promise<UserResponse> {
        return http<UserResponse>(`/api/users/username/${username}`);
    },
};
