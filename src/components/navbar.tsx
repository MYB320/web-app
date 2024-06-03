'use clinet'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LogIn from './logiIn'
import { ShoppingCart } from 'lucide-react'
import { ProductsContext } from '@/app/products/context'
import { useContext } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { products } = useContext(ProductsContext)

  return (
    <header className='relative flex justify-center py-6'>
      <div className='sticky top-0 w-full flex justify-between items-center p-4 border rounded-lg z-50'>
        <div className='cursor-pointer transition-all'>
          <Link href={'/'} className='text-xl font-bold text-foreground'>
            Weasy <span className='text-primary'>Shop</span>
          </Link>
        </div>
        <div className='mx-6 items-center space-x-4 lg:space-x-6 hidden md:block'>
          <Button variant='ghost' asChild>
            <Link href={'/'}>Home</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href={'/products'}>Shop</Link>
          </Button>
          <Button variant='ghost' asChild>
            <Link href={'/'}>About Us</Link>
          </Button>
        </div>
        <div className='flex items-center gap-6'>
          <LogIn />
          <Button
            size={'sm'}
            variant={'ghost'}
            className={cn(
              'hover:bg-blue-200 flex gap-1 items-center',
              products.length >= 1 && 'bg-blue-50'
            )}
            asChild
          >
            <Link href={'/products/cart'}>
              <ShoppingCart size={18} />
              <h1>{products.length != 0 ? products.length : ''}</h1>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
