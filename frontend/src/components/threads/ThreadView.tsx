'use client';



import { formatDistanceToNow } from 'date-fns';

import { ThreadResponse, ReplyResponse, UserResponse } from '@/lib/types';

interface ThreadViewProps {
  thread: ThreadResponse;
  replies?: ReplyResponse[];
  currentUser: UserResponse;
  onReply?: (content: string) => void;
}

export function ThreadView({ thread, replies = [], currentUser, onReply }: ThreadViewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{thread.title}</h1>
        <p className="text-sm text-muted-foreground">
          {thread.content}
        </p>
        <p className="text-sm text-muted-foreground">by {thread.author.username}</p>
      </div>

      <div className="space-y-4">
        {replies.map((reply) => (
          <div key={reply.id} className="border rounded p-4">
            <p className="text-sm text-muted-foreground">{reply.author.username}</p>
            <p>{reply.content}</p>
            <time className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
            </time>
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const content = (e.target as any).content.value;
          onReply?.(content);
          (e.target as any).reset();
        }}
        className="space-y-2"
      >
        <textarea
          name="content"
          placeholder="Write a reply..."
          className="w-full border rounded px-3 py-2"
          required
        />
        <button className="px-4 py-2 bg-primary text-white rounded">Reply</button>
      </form>
    </div>
  );
}