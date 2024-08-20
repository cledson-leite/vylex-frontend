/* eslint-disable prettier/prettier */
import React from 'react';
import Button from '@/components/atoms/Button';
import { IProductViewModel } from '@/view_model/product_view_model';
import { useRouter } from 'next/router';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './product_list_item.module.sass'

type ListItemProps = {
    viewModel: IProductViewModel;
    name: string
  }

export default function ListItem({viewModel, name}: ListItemProps) {
    const router = useRouter();
  return (
    <div className="list-item">
      <h3 className="product-name">{name}</h3>
      <div className="button-group">
        <Button icon={<FaEdit />} onclick={() => router.push(`/products/${name}`)} />
        <Button icon={<FaTrashAlt />} onclick={() => viewModel.deleteProduct(name)} />
      </div>
    </div>
  );
}
