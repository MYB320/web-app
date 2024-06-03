'use client'
import CartRow from '@/components/cartRow'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useContext } from 'react'
import { ProductsContext } from '../context'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function page() {
  const { products } = useContext(ProductsContext)
  const router = useRouter()

  const totalSubPrice = products
    .reduce((total, product) => {
      return total + product.price * (product.Quantite as number)
    }, 0)
    .toFixed(2)
  return (
    <>
      <div className='py-4'>
        <div className='flex items-center gap-4 pb-6'>
          <Button size={'sm'} variant={'link'} onClick={() => router.back()}>
            <ArrowLeft size={16} className='mr-1' /> Back
          </Button>
          <h1 className='text-4xl tracking-wider font-semibold'>My Cart</h1>
        </div>
      </div>
      <div className='grid grid-rows-2 md:grid-cols-4 pt-4'>
        <div className='md:col-span-3 px-4'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-1/2'>Product Details</TableHead>
                <TableHead className=''>Quantite</TableHead>
                <TableHead className='text-right'>Prise</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <CartRow product={product} />
              ))}
            </TableBody>
          </Table>
        </div>
        <div className='px-4 pt-10'>
          <Card className='shadow-none'>
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className='flex justify-between items-center'>
                  <h1>Sub-total</h1>
                  <h1>$ {totalSubPrice}</h1>
                </div>
                <div className='flex justify-between items-center pb-4'>
                  <h1>Delovery</h1>
                  <h1>$ 50.00</h1>
                </div>
                <h1 className='text-xl border-t text-right pt-4'>
                  ${' '}
                  {Number(totalSubPrice) === 0
                    ? '0.00'
                    : (Number(totalSubPrice) + 50).toFixed(2)}
                </h1>
              </div>
            </CardContent>
            <CardFooter>
              <Button size={'lg'} className='w-full'>
                Check out
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
