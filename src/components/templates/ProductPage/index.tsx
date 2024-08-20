/* eslint-disable prettier/prettier */
import React from 'react';
import { ProductDto } from '@/shared/dto';
import { useRouter } from 'next/router';

interface ProductTemplateProps {
  products: ProductDto[];
  onDelete: (name: string) => void;
}

export default function ProductTemplate({
  products,
  onDelete,
}: ProductTemplateProps) {
  const router = useRouter();
  const handleNewProduct = () => {
    router.push('/products/new');
  };
  const handleViewDetails = (name: string) => {
    router.push(`/products/${name}`);
  };

  const handleDelete = (name: string) => {
    onDelete(name);
  };
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <button onClick={handleNewProduct}>Adicionar Produto</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <div>
              <h2>{product.name}</h2>
            </div>
            <button onClick={() => handleViewDetails(product.name)}>
              Details
            </button>
            <button onClick={() => handleDelete(product.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
