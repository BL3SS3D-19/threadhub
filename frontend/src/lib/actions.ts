'use server';

import { z } from 'zod';
import { createThread, addReply, getCurrentUser } from './data';
import { revalidatePath } from 'next/cache';

const createThreadSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  content: z.string().min(10, 'Content must be at least 10 characters long.'),
});

export async function createThreadAction(prevState: any, formData: FormData) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { message: 'You must be logged in to create a thread.', status: 'error' };
  }

  const validatedFields = createThreadSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your input.',
      status: 'error',
    };
  }

  try {
    const newThread = await createThread(validatedFields.data.title, validatedFields.data.content, currentUser);
    revalidatePath('/');
    return { message: 'Thread created successfully!', status: 'success', threadId: newThread.id };
  } catch (error) {
    return { message: 'Failed to create thread.', status: 'error' };
  }
}

const addReplySchema = z.object({
    content: z.string().min(1, 'Reply cannot be empty.'),
    threadId: z.string(),
});

export async function addReplyAction(prevState: any, formData: FormData) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return { message: 'You must be logged in to reply.', status: 'error' };
    }

    const validatedFields = addReplySchema.safeParse({
        content: formData.get('content'),
        threadId: formData.get('threadId'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed.',
            status: 'error',
        };
    }
    
    try {
        await addReply(validatedFields.data.threadId, validatedFields.data.content, currentUser);
        revalidatePath(`/threads/${validatedFields.data.threadId}`);
        return { message: 'Reply added!', status: 'success' };
    } catch (error) {
        return { message: 'Failed to add reply.', status: 'error' };
    }
}
