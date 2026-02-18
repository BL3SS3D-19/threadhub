import Link from 'next/link';

import { ThreadResponse } from '@/lib/types';

interface ThreadListProps {
  threads: ThreadResponse[];
}

export function ThreadList({ threads }: ThreadListProps) {
  if (threads.length === 0) {
    return <p>No hay hilos todavía.</p>;
  }

  return (
    <ul className="flex flex-col gap-4">
      {threads.map((thread) => (
        <Link href={`/threads/${thread.id}`} key={thread.id} className="block">
          <li className="rounded-2xl border border-slate-800 bg-[#0B0B10] px-6 py-5 shadow-md shadow-black/40 transition hover:border-red-500"
          >

            <h3 className="mb-2 text-lg font-semibold text-slate-50">
              {thread.title}
            </h3>


            <p className="mb-4 line-clamp-2 text-sm text-slate-300">
              {thread.content.slice(0, 220)}…
            </p>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>por {thread.author.username}</span>

              {/* Ejemplo de meta info similar a “3 · about 2 hours ago” */}
              <span className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  {/* icono comentarios (svg opcional) */}
                  <span className="text-slate-400">💬</span>
                  <span>3</span>
                </span>
                <span>hace 2 horas</span>
              </span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}