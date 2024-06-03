'use client'
import React, { useContext } from 'react'
import { Button } from './ui/button'
import { Product } from '@/lib/interface'
import { PenLine, Trash2 } from 'lucide-react'
import { ProductsContext } from '@/app/products/context'

export default function ModifedButtons({ product }: { product: Product }) {
  const { products } = useContext(ProductsContext)
  return (
    <div className='flex gap-2'>
      <Button>
        <PenLine className='mr-2 w-4 h-4' />
        <p className='text-base font-semibold'>Update</p>
      </Button>
      <Button variant={'destructive'}>
        <Trash2 className='mr-2 w-4 h-4' />
        <p className='text-base font-semibold'>Delete</p>
      </Button>
    </div>
  )
}
