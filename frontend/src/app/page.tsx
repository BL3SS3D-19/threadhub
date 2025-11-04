import { getThreads, getCurrentUser } from '@/lib/data';
import { ThreadList } from '@/components/threads/ThreadList';
import { SearchInput } from '@/components/threads/SearchInput';
import { CreateThreadDialog } from '@/components/threads/CreateThreadDialog';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const threads = await getThreads(query);
  const currentUser = await getCurrentUser();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Discussions
        </h1>
        <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-end md:w-auto">
          <SearchInput placeholder="Search threads..." />
          <CreateThreadDialog currentUser={currentUser} />
        </div>
      </div>
      <ThreadList threads={threads} />
    </div>
  );
}
