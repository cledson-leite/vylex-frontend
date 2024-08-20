import { ProductDto } from '@/shared/dto';

export interface IProductViewModel {
  loadProducts: () => Promise<void>;
  getProducts: () => ProductDto[];
  deleteProduct: (name: string) => Promise<void>;
}
