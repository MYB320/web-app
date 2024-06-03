import CartButton from '@/components/cartButton'
import RatingStars from '@/components/ratingStar'
import { getProduct } from '@/lib/fectch'
import { Layers3 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default async function page({ params }: { params: { id: number } }) {
  const product = await getProduct(params.id)

  return (
    <div className='grid grid-rows-2 md:grid-cols-3 px-2 gap-4 mt-12'>
      <div className='relative h-80 '>
        <Image
          alt='Product image'
          src={product.image}
          fill
          objectFit='contain'
        />
      </div>
      <div className='md:col-span-2 md:space-y-4'>
        <div>
          <div className='flex items-center justify-between pb-1'>
            <div className='flex items-center'>
              <RatingStars rating={product.rating.rate} />
              <p>
                {product.rating.rate} ({product.rating.count})
              </p>
            </div>

            <div className='flex items-center'>
              <Layers3 size={16} />
              <p className='ml-1 font-semibold tracking-tight underline text-sm'>
                {product.category}
              </p>
            </div>
          </div>
          <div className='border-b'>
            <h1 className='text-2xl font-bold tracking-wide'>
              {product.title}
            </h1>
          </div>
        </div>
        <div className='pt-8 pb-4'>
          <h1 className='text-4xl font-bold text-primary'>$ {product.price}</h1>
        </div>
        <div className='space-y-2'>
          <h1 className='font-semibold text-lg tracking-tight'>Description:</h1>
          <p className='prose-p:first-letter:capitalize '>
            {product.description}
          </p>
        </div>
        <div className='flex flex-col gap-4 md:flex-row justify-end items-center pt-8 pb-4'>
          <CartButton product={product} />
        </div>
      </div>
    </div>
  )
}
