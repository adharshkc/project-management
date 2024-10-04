export type User = {
  name: string;
  email: string;
  password: string;
  user_id?: number;
  projects?:Project[]
};

export type Project = {
  name: string;
  userId: number;
  todos:Todo[]
  id?: number;
};

export type Todo = {
  name: string;
  projectId: number;
  id: number;
  status: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdDate: any
};
