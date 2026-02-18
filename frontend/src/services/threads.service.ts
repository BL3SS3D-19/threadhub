import { http } from '../lib/http';
import { ThreadResponse, CreateThreadDTO, UpdateThreadDTO, ThreadFilters, ReplyResponse } from '../lib/types';

export const threadsService = {

    async getRepliesByThread(threadId: string): Promise<ReplyResponse[]> {
        return http<ReplyResponse[]>(`/api/replies/thread/${threadId}`);
    },

    async getAllThreads(filters?: ThreadFilters): Promise<ThreadResponse[]> {
        const query = filters
            ? '?' +
            Object.entries(filters)
                .map(([key, value]) => `${key}=${encodeURIComponent(value as string | number)}`)
                .join('&')
            : '';
        return http<ThreadResponse[]>(`/api/threads${query}`);

    },

    async getThreadById(id: string): Promise<ThreadResponse> {
        return http<ThreadResponse>(`/api/threads/${id}`);
    },

    async createThread(data: CreateThreadDTO): Promise<ThreadResponse> {
        return http<ThreadResponse>('/api/threads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });;
    },

    async updateThread(id: string, data: UpdateThreadDTO): Promise<ThreadResponse[]> {
        return http<ThreadResponse[]>(`/api/threads/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    },


    async deleteThread(id: string): Promise<void> {
        return http<void>(`/api/threads/${id}`, {
            method: 'DELETE',

        });
    }




}

