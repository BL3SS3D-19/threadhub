import { getThreadById, getCurrentUser } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ThreadView } from '@/components/threads/ThreadView';

export default async function ThreadPage({ params }: { params: { id: string } }) {
  const thread = await getThreadById(params.id);
  const currentUser = await getCurrentUser();

  if (!thread) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <ThreadView thread={thread} currentUser={currentUser} />
    </div>
  );
}
