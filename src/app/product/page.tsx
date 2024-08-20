import { IProductViewModel } from '@/view_model/product_view_model';
import React, { useEffect } from 'react';

interface ProductPageProps {
  viewModel: IProductViewModel;
}

export default function ProductPage({ viewModel }: ProductPageProps) {
  useEffect(() => {
    viewModel.loadProducts();
  }, [viewModel]);
  const products = React.useMemo(() => {
    return viewModel.getProducts();
  }, [viewModel]);
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
