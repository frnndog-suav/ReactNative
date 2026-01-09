export interface IResponseUpdateComment {
  message: string;
  ratingUpdated: boolean;
  comment: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}
