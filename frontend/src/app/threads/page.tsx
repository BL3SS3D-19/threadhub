'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { ThreadList } from '@/components/threads/ThreadList';
import { SearchInput } from '@/components/threads/SearchInput';
import { CreateThreadDialog } from '@/components/threads/CreateThreadDialog';
import { useThreads } from '@/hooks/useThreads';
import type { ThreadResponse, UserResponse } from '@/lib/types';
import { CreateThreadButton } from '@/components/threads/CreateThreadButton';

export default function Home() {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get('query') || '';

  //Estado para mostrar o no formulario para crear thread
  const [showForm, setShowForm] = useState(false);

  // Estado para búsqueda controlada
  const [searchTerm, setSearchTerm] = useState(queryFromUrl);

  // Hook para traer threads filtrados
  const { threads, loading, error, refresh } = useThreads({ filters: { search: searchTerm } });

  // Usuario demo; reemplazar con getCurrentUser si quieres
  const currentUser: UserResponse = {
    id: '1',
    username: 'DemoUser',
    email: 'demo@example.com',
    avatarUrl: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // referencia al contenedor donde se renderiza el formulario
  const formRef = useRef<HTMLDivElement | null>(null);

  // Opcional: actualizar searchTerm si cambia la query en URL desde fuera
  useEffect(() => {
    setSearchTerm(queryFromUrl);
  }, [queryFromUrl]);

  // cuando showForm pasa a true y el formulario está en el DOM, hacemos scroll suave
  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [showForm]);

  return (
    <main className="min-h-screen bg-[#050509] text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col px-6 pb-10 pt-8">
        {/* Top bar */}
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end md:w-auto">
            <div className="w-full sm:w-80">
              <SearchInput value={searchTerm} onChange={setSearchTerm} />
            </div>
            <CreateThreadButton
              onClick={() => setShowForm(true)}
            />
          </div>
        </header>

        {loading && <p className="text-sm text-slate-400">Cargando hilos...</p>}
        {error && (
          <p className="text-sm text-red-400">Error: {error}</p>
        )}

        {!loading && !error && <ThreadList threads={threads} />}

        <div ref={formRef} className="flex justify-center pt-8">
          {showForm && (
            <CreateThreadDialog
              currentUser={currentUser}
              onCreated={() => {
                refresh();
                setShowForm(false);
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
