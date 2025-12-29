export interface ICreateCommentRequest {
  content: string;
  productId: number;
  rating: number;
}

export interface ICreateCommentResponse {
  message: string;
  ratingApplied: boolean;
}
