export type ProductDto = {
  name: string;
  quantity: number;
  price: number;
};

export type PaginationDto = {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
};
export type ListProducts = {
  items: ProductDto[];
  meta?: PaginationDto;
};
