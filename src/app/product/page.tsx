import ProductTemplate from '@/components/templates/ProductPage';
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
    <ProductTemplate products={products} onDelete={viewModel.deleteProduct} />
  );
}
