export interface IProductCategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  value: string;
  name: string;
  description: string;
  photo: string;
  height: string;
  width: string;
  weight: string;
  averageRating: number;
  views: number;
  ratingCount: number;
  categoryId: number;
  category: IProductCategory;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
