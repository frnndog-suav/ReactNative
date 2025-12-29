export interface IUpdateCommentRequest {
  content: string;
  commentId: number;
  rating: number;
}

export interface IUpdateCommentResponse {
  message: string;
  ratingUpdated: boolean;
  comment: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}
