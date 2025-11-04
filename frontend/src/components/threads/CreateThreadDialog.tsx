'use client';

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { createThreadAction } from '@/lib/actions';
import type { User } from '@/lib/types';
import { PlusCircle } from 'lucide-react';

const createThreadSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long.'),
  content: z.string().min(10, 'Content must be at least 10 characters long.'),
});

type CreateThreadFormValues = z.infer<typeof createThreadSchema>;

const initialState = {
  message: '',
  errors: {},
  status: '',
  threadId: null,
};

function CreateThreadForm({
  onSuccess,
}: {
  onSuccess: (threadId: string) => void;
}) {
  const [state, formAction] = useFormState(createThreadAction, initialState);
  const { toast } = useToast();

  const form = useForm<CreateThreadFormValues>({
    resolver: zodResolver(createThreadSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  useEffect(() => {
    if (state.status === 'success' && state.threadId) {
      toast({
        title: 'Success!',
        description: state.message,
      });
      onSuccess(state.threadId);
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, onSuccess, toast]);
  
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? 'Creating...' : 'Create Thread'}
        </Button>
    )
  }

  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-4"
        onSubmit={form.handleSubmit(() => {
          form.clearErrors();
          form.trigger().then((isValid) => {
            if (isValid) {
              const formData = new FormData();
              const data = form.getValues();
              formData.append('title', data.title);
              formData.append('content', data.content);
              formAction(formData);
            }
          });
        })}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="What's the topic?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your thoughts..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <SubmitButton />
        </DialogFooter>
      </form>
    </Form>
  );
}

export function CreateThreadDialog({ currentUser }: { currentUser: User }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleSuccess = (threadId: string) => {
    setOpen(false);
    router.push(`/threads/${threadId}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Thread
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a new thread</DialogTitle>
          <DialogDescription>
            Start a new discussion by providing a title and your initial post.
          </DialogDescription>
        </DialogHeader>
        <CreateThreadForm onSuccess={handleSuccess} />
      </DialogContent>
    </Dialog>
  );
}
