// hooks/useThreads.ts
import { useState, useEffect } from 'react';
import { threadsService } from '@/services/threads.service';
import type { ThreadResponse, ThreadFilters, ReplyResponse } from '@/lib/types';

interface UseThreadsProps {
    filters?: ThreadFilters;
    threadId?: string; // Para cargar hilo + replies específicos
}

export function useThreads({ filters, threadId }: UseThreadsProps) {
    const [threads, setThreads] = useState<ThreadResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [thread, setThread] = useState<ThreadResponse | null>(null); // Hilo específico
    const [replies, setReplies] = useState<ReplyResponse[]>([]);        // Respuestas del hilo

    const fetchThreads = async () => {
        if (!threadId) { // Lista de hilos
            setLoading(true);
            setError(null);
        }
        try {
            const data = await threadsService.getAllThreads(filters);
            setThreads(data);
        } catch (err: any) {
            setError(err.message || 'Error fetching threads');
        } finally {
            setLoading(false);
        }
    };
    const fetchThreadWithReplies = async () => {
        if (threadId) { // Hilo específico + replies
            setLoading(true);
            setError(null);
            try {
                const [threadData, repliesData] = await Promise.all([
                    threadsService.getThreadById(threadId),
                    threadsService.getRepliesByThread(threadId)
                ]);
                setThread(threadData);
                setReplies(repliesData);
            } catch (err: any) {
                setError(err.message || 'Error fetching thread');
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (threadId) {
            fetchThreadWithReplies();
        } else {
            fetchThreads();
        }
    }, [filters?.search, threadId]); // Recarga por search o cambio de threadId

    return {
        threads,
        thread,
        replies,
        loading,
        error,
        refresh: threadId ? fetchThreadWithReplies : fetchThreads
    };
}
