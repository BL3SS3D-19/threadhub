// backend/src/types/index.ts

// DTOs para crear recursos
export interface CreateThreadDTO {
    title: string;
    content: string;
    authorId: string;
}

export interface CreateReplyDTO {
    content: string;
    threadId: string;
    authorId: string;
}

export interface CreateUserDTO {
    username: string;
    email: string;
    password: string;
    avatarUrl?: string;
}

// DTOs para actualizar recursos
export interface UpdateThreadDTO {
    title?: string;
    content?: string;
}

export interface UpdateUserDTO {
    username?: string;
    email?: string;
    avatarUrl?: string;
}

// Filtros para queries
export interface ThreadFilters {
    authorId?: string;
    search?: string;
    limit?: number;
    offset?: number;
}

export interface ReplyFilters {
    threadId?: string;
    authorId?: string;
    limit?: number;
}

// Tipos de respuesta (sin password)
export interface UserResponse {
    id: string;
    username: string;
    email: string;
    avatarUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface ThreadResponse {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: {
        id: string;
        username: string;
        avatarUrl: string | null;
    };
    lastActivityAt: Date;
    createdAt: Date;
    updatedAt: Date;
    replyCount?: number;
}

export interface ReplyResponse {
    id: string;
    content: string;
    threadId: string;
    authorId: string;
    author: {
        id: string;
        username: string;
        avatarUrl: string | null;
    };
    createdAt: Date;
    updatedAt: Date;
}