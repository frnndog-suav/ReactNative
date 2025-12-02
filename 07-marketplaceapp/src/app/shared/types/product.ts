export type TProductCategory = {
  id: number;
  name: string;
};

export type TProduct = {
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
  category: TProductCategory;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
