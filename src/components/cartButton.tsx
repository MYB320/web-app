'use client'
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { ShoppingCart, X } from 'lucide-react'
import { ProductsContext } from '@/app/products/context'
import { Product } from '@/lib/interface'

export default function cartButton({ product }: { product: Product }) {
  const { products, addProduct, removeProduct } = useContext(ProductsContext)

  return (
    <>
      {products.some((item) => item.id === product.id) ? (
        <Button
          size={'lg'}
          variant={'destructive'}
          onClick={() => removeProduct(product)}
        >
          <X className='mr-2 w-5 h-5' />
          <p className='text-base font-semibold'>Remove from Cart</p>
        </Button>
      ) : (
        <Button
          size={'lg'}
          variant={'secondary'}
          onClick={() => addProduct(product)}
        >
          <ShoppingCart className='mr-2 w-5 h-5' />
          <p className='text-base font-semibold'>Add to Cart</p>
        </Button>
      )}
    </>
  )
}
