import type { Thread, User, Post } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { revalidatePath } from 'next/cache';

const users: User[] = [
  { id: 'user-1', name: 'Alice', avatarUrl: PlaceHolderImages.find(img => img.id === 'user-1-avatar')?.imageUrl || '' },
  { id: 'user-2', name: 'Bob', avatarUrl: PlaceHolderImages.find(img => img.id === 'user-2-avatar')?.imageUrl || '' },
  { id: 'user-3', name: 'Charlie', avatarUrl: PlaceHolderImages.find(img => img.id === 'user-3-avatar')?.imageUrl || '' },
  { id: 'user-4', name: 'David', avatarUrl: PlaceHolderImages.find(img => img.id === 'user-4-avatar')?.imageUrl || '' },
];

const currentUser: User = { id: 'user-current', name: 'You', avatarUrl: PlaceHolderImages.find(img => img.id === 'current-user-avatar')?.imageUrl || '' };

let threads: Thread[] = [
  {
    id: 'thread-1',
    title: 'What are the best practices for state management in React?',
    posts: [
      {
        id: 'post-1-1',
        author: users[0],
        content: 'I\'ve been using Redux for a while, but I\'m curious about newer solutions like Zustand or Jotai. What are your experiences? I find that Redux has a lot of boilerplate and can be complex for smaller projects. I\'m looking for something simpler but still powerful enough for a medium-sized application. Any recommendations would be appreciated!',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      },
      {
        id: 'post-1-2',
        author: users[1],
        content: 'Zustand is great for simplicity! It feels like a lightweight version of Redux with a much smaller API surface.',
        createdAt: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
      },
      {
        id: 'post-1-3',
        author: users[2],
        content: 'I prefer Jotai for its atomic approach. It feels very "React-y" and integrates seamlessly with hooks.',
        createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      },
    ],
  },
  {
    id: 'thread-2',
    title: 'Next.js 15 vs Remix: which one to choose in 2024?',
    posts: [
      {
        id: 'post-2-1',
        author: users[3],
        content: 'Both frameworks have their strengths. Next.js has a huge ecosystem and Vercel\'s backing, while Remix has a strong focus on web standards. What are the key decision factors for you?',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
      },
      {
        id: 'post-2-2',
        author: users[0],
        content: 'For me, it comes down to data mutations. Remix\'s `action` functions feel more intuitive than Next.js Server Actions, but the latter are getting better with each release.',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(),
      },
    ],
  },
  {
    id: 'thread-3',
    title: 'The rise of AI in software development',
    posts: [
      {
        id: 'post-3-1',
        author: users[2],
        content: 'Tools like GitHub Copilot are changing the way we code. Are we heading towards a future where AI writes most of the code? It\'s both exciting and a bit scary. I use it daily and my productivity has definitely increased, but I worry about becoming too reliant on it. What about junior developers? Will they learn the fundamentals properly?',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
      },
    ],
  },
];

// Simulate DB calls with async functions
export async function getThreads(query?: string): Promise<Thread[]> {
  await new Promise(resolve => setTimeout(resolve, 100)); // Simulate network delay
  let filteredThreads = threads;
  if (query) {
    const lowerCaseQuery = query.toLowerCase();
    filteredThreads = threads.filter(thread => 
      thread.title.toLowerCase().includes(lowerCaseQuery) ||
      thread.posts[0].content.toLowerCase().includes(lowerCaseQuery)
    );
  }
  return Promise.resolve(JSON.parse(JSON.stringify(filteredThreads.sort((a, b) => new Date(b.posts[b.posts.length-1].createdAt).getTime() - new Date(a.posts[a.posts.length-1].createdAt).getTime()))));
}

export async function getThreadById(id: string): Promise<Thread | undefined> {
  await new Promise(resolve => setTimeout(resolve, 50));
  const thread = threads.find(t => t.id === id);
  return Promise.resolve(thread ? JSON.parse(JSON.stringify(thread)) : undefined);
}

export async function getCurrentUser(): Promise<User> {
  await new Promise(resolve => setTimeout(resolve, 20));
  return Promise.resolve(JSON.parse(JSON.stringify(currentUser)));
}

export async function createThread(title: string, content: string, author: User): Promise<Thread> {
  await new Promise(resolve => setTimeout(resolve, 200));
  const newThread: Thread = {
    id: `thread-${Date.now()}`,
    title,
    posts: [
      {
        id: `post-${Date.now()}`,
        author,
        content,
        createdAt: new Date().toISOString(),
      },
    ],
  };
  threads.push(newThread);
  revalidatePath('/');
  return Promise.resolve(JSON.parse(JSON.stringify(newThread)));
}

export async function addReply(threadId: string, content: string, author: User): Promise<Post> {
  await new Promise(resolve => setTimeout(resolve, 150));
  const thread = threads.find(t => t.id === threadId);
  if (!thread) {
    throw new Error('Thread not found');
  }
  const newPost: Post = {
    id: `post-${Date.now()}`,
    author,
    content,
    createdAt: new Date().toISOString(),
  };
  thread.posts.push(newPost);
  revalidatePath(`/threads/${threadId}`);
  revalidatePath('/');
  return Promise.resolve(JSON.parse(JSON.stringify(newPost)));
}
