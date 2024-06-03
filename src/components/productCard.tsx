'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Layers3, ShoppingCart, X } from 'lucide-react'
import { Product } from '@/lib/interface'
import { useContext } from 'react'
import { ProductsContext } from '@/app/products/context'
import Link from 'next/link'

interface productProps {
  product: Product
}

export default function ProductCard({ product }: productProps) {
  const { products, addProduct, removeProduct } = useContext(ProductsContext)

  return (
    <Card className='hover:bg-slate-50 h-full transition-colors cursor-pointer'>
      <Link href={`/products/${product.id}`}>
        <CardHeader className='h-48 overflow-hidden bg-white'>
          <div className='relative w-full h-full'>
            <Image
              src={product.image}
              alt='img'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center py-2'>
              <Layers3 size={16} />
              <p className='ml-1 font-semibold tracking-tight underline text-sm'>
                {product.category}
              </p>
            </div>
            <CardTitle className='line-clamp-1'>{product.title}</CardTitle>

            <CardDescription className='line-clamp-2'>
              {product.description}
            </CardDescription>
          </div>
        </CardContent>
      </Link>
      <CardFooter className='justify-between items-end'>
        <div>
          <p className='text-xs text-left font-semibold'>Price</p>
          <p className='text-center text-xl'>$ {product.price}</p>
        </div>
        {products.some((item) => item.id === product.id) ? (
          <Button
            size={'icon'}
            variant={'destructive'}
            onClick={() => removeProduct(product)}
          >
            <X size={20} />
          </Button>
        ) : (
          <Button
            size={'icon'}
            variant={'outline'}
            className='hover:bg-blue-200 z-50'
            onClick={() => addProduct(product)}
          >
            <ShoppingCart size={20} />
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
