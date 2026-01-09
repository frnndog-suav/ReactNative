export interface IComment {
  id: number;
  content: string;
  createdAt: Date;
  user: {
    id: number;
    name: string;
  };
}
