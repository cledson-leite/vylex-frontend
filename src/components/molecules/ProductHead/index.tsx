/* eslint-disable prettier/prettier */
import React from 'react'
import './head.module.sass'
import Button from '@/components/atoms/Button'
import { FaSquarePlus } from 'react-icons/fa6'
import { useRouter } from 'next/router'

type HeadProps = {
    title: string
    hasButton?: boolean
}
export default function Head({ title, hasButton }: HeadProps) {
  const router = useRouter();
  const handleNewProduct = () => {
    router.push('/products/new');
  };
  return (
    <div className="head-with-button">
      <h1 className="head-title">{title}</h1>
      {
        hasButton &&
        <Button icon={<FaSquarePlus />} onclick={handleNewProduct} />
      }
    </div>
  )
}
