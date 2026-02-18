// src/app/threads/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useThreads } from '@/hooks/useThreads';
import { ThreadView } from '@/components/threads/ThreadView';
import { Suspense } from 'react';

const currentUser = {
  id: '1',
  username: 'DemoUser',
  email: 'demo@example.com',
  avatarUrl: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

function ThreadPageContent() {
  const params = useParams();

  // 🔧 VALIDACIÓN ESPECÍFICA PARA EL BUG
  console.log('🔍 Raw params:', params); // Debug

  const id = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id;

  console.log('🔍 Parsed id:', id); // Debug

  if (!id || typeof id !== 'string') {
    return <div>Hilo no válido</div>;
  }

  const { thread, replies, loading, error } = useThreads({ threadId: id });

  if (loading) return <div className="container py-8">Cargando hilo...</div>;
  if (error || !thread) return <div className="container py-8">Hilo no encontrado</div>;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <ThreadView thread={thread} replies={replies} currentUser={currentUser} />
    </div>
  );
}

export default function ThreadPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ThreadPageContent />
    </Suspense>
  );
}
