'use client';

import { useState, useRef, useEffect } from 'react';
import type { Thread, Post, User } from '@/lib/types';
import { useFormState } from 'react-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatDistanceToNow } from 'date-fns';
import { addReplyAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { SendHorizonal } from 'lucide-react';

const replyInitialState = {
  message: '',
  status: '',
};

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="bg-card">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-foreground">{post.author.name}</p>
              <time dateTime={post.createdAt} className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </time>
            </div>
            <p className="mt-2 text-foreground/90 whitespace-pre-wrap">{post.content}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ThreadView({ thread, currentUser }: { thread: Thread; currentUser: User }) {
  const [replyState, replyAction] = useFormState(addReplyAction, replyInitialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (replyState.status === 'success') {
      formRef.current?.reset();
      toast({
        title: 'Success!',
        description: replyState.message,
      });
    } else if (replyState.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: replyState.message,
      });
    }
  }, [replyState, toast]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">{thread.title}</h1>
      </div>

      <div className="space-y-4">
        {thread.posts.map((post, index) => (
          <div key={post.id} className="space-y-4">
            <PostCard post={post} />
            {index === 0 && <Separator />}
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <form ref={formRef} action={replyAction} className="flex items-start gap-4">
            <Avatar className="h-10 w-10 border hidden sm:block">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
              <input type="hidden" name="threadId" value={thread.id} />
              <Textarea
                name="content"
                placeholder="Write a reply..."
                className="min-h-[100px]"
                required
              />
              <div className="flex justify-end">
                <Button type="submit">
                  Reply <SendHorizonal className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
