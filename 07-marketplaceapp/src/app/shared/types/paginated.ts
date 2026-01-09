export type TPaginated<T> = {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
};
