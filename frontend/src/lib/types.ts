export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Post = {
  id: string;
  author: User;
  content: string;
  createdAt: string;
};

export type Thread = {
  id: string;
  title: string;
  posts: Post[];
};
