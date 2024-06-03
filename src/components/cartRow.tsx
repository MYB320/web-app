'use client'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import { Product } from '@/lib/interface'
import { ProductsContext } from '@/app/products/context'

const reducer = (state: any, action: any) => {
  if (action.type === 'INCREASE') {
    return {
      ...state,
      Quantite: state.Quantite + 1,
    }
  } else if (action.type === 'DECREASE') {
    if (state.Quantite == 1) {
      return state
    }
    return {
      ...state,
      Quantite: state.Quantite - 1,
    }
  }
}

export default function CartRow({ product }: { product: Product }) {
  const { products, setProducts, removeProduct } = useContext(ProductsContext)

  const [state, dispatch] = useReducer(reducer, product)

  const totalPrice = product.price * (product.Quantite as number)

  useEffect(() => {
    const newArr = products.map((itemArr) => {
      itemArr.id == product.id && (product.Quantite = state.Quantite)
      return itemArr
    })
    setProducts(newArr)
  }, [state])

  return (
    <TableRow>
      <TableCell>
        <div className='flex gap-8 items-center'>
          <Image src={product.image} alt='product' width={50} height={100} />
          <div className='felx flex-col gap-4'>
            <h1 className='text-base font-semibold'>{product.title}</h1>
            <h1 className='font-light tracking-tight'>{product.category}</h1>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className='flex gap-2 items-center'>
          <Button
            size={'icon'}
            variant={'outline'}
            disabled={product.Quantite === 1}
            onClick={() => dispatch({ type: 'DECREASE' })}
          >
            <Minus size={16} />
          </Button>
          <div className='border rounded-lg bg-white py-2 px-4'>
            <h1>{product.Quantite}</h1>
          </div>
          <Button
            size={'icon'}
            variant={'outline'}
            disabled={product.Quantite === 100}
            onClick={() => dispatch({ type: 'INCREASE' })}
          >
            <Plus size={16} />
          </Button>
        </div>
      </TableCell>
      <TableCell className='text-right'>$ {totalPrice}</TableCell>
      <TableCell className='text-right'>
        <Button
          className='mr-4'
          size={'icon'}
          variant={'destructive'}
          onClick={() => removeProduct(product)}
        >
          <X size={16} />
        </Button>
      </TableCell>
    </TableRow>
  )
}
