import { IComment } from "./comment";

export interface IResponseGetUserComment {
  comment: IComment;
  rating: number;
}
