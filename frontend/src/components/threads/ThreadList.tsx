import type { Thread } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export function ThreadList({ threads }: { threads: Thread[] }) {
  if (threads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card p-12 text-center shadow-sm">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">No Threads Found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          There are no threads matching your search. Try creating a new one!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {threads.map((thread) => (
        <Link href={`/threads/${thread.id}`} key={thread.id} className="block transition-transform duration-200 hover:scale-[1.01]">
          <Card className="hover:border-primary/50 hover:shadow-lg transition-all duration-200 bg-card">
            <CardHeader>
              <CardTitle className="text-xl font-headline tracking-tight">{thread.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 text-muted-foreground">{thread.posts[0].content}</p>
            </CardContent>
            <CardFooter className="flex flex-wrap items-center justify-between gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={thread.posts[0].author.avatarUrl} alt={thread.posts[0].author.name} />
                        <AvatarFallback>{thread.posts[0].author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{thread.posts[0].author.name}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <MessageSquareText className="h-4 w-4" />
                        <span>{thread.posts.length}</span>
                    </div>
                    <time dateTime={thread.posts[0].createdAt}>
                        {formatDistanceToNow(new Date(thread.posts[0].createdAt), { addSuffix: true })}
                    </time>
                </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
