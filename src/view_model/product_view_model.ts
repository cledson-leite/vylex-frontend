import { ProductDto } from '@/shared/dto';

export interface IProductViewModel {
  loadProducts: () => Promise<void>;
  getProducts: () => ProductDto[];
}
