// frontend/src/types/index.ts

// Threads
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
export interface CreateThreadDTO {
  title: string;
  content: string;
  authorId: string;
}
// DTOs para actualizar recursos
export interface UpdateThreadDTO {
  title?: string;
  content?: string;
}

// Filtros para queries
export interface ThreadFilters {
  authorId?: string;
  search?: string;
  limit?: number;
  offset?: number;
}

// Replies
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

// Users
export interface UserResponse {
  id: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserDTO {
  username: string;
  email: string;
  password: string;
  avatarUrl?: string;
}