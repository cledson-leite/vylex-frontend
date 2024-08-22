'use server';

import { revalidatePath } from 'next/cache';

type Product = {
  name: string;
  quantity: number;
  price: number;
};

export async function saveProductAction(
  prevState: { message?: string },
  formData: FormData,
): Promise<{ message?: string }> {
  const products = [
    {
      name: 'Product 1',
      quantity: 10,
      price: 2.0,
    },
    {
      name: 'Product 2',
      quantity: 50,
      price: 15.0,
    },
  ];

  const product: Product = {
    name: formData.get('name') as string,
    quantity: Number(formData.get('quantity')),
    price: Number(formData.get('price')),
  };

  try {
    products.push(product);
    revalidatePath('/product');
    return { message: 'Produto salvo com sucesso!' };
  } catch (error) {
    return {
      message: 'Error saving the product.',
    };
  }
}
