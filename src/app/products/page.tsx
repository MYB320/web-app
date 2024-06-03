import FilterOption from '@/components/filterOption'
import ProductCard from '@/components/productCard'
import { getProducts, getProductsByCategory } from '@/lib/fectch'

export default async function Products({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  let searchQuery =
    typeof searchParams.search === 'string' ? searchParams.search : ''
  let categoryQuery =
    typeof searchParams.category === 'string' ? searchParams.category : 'All'
  let sortQuery =
    typeof searchParams.sort === 'string' ? searchParams.sort : 'asc'
  const limitQuery =
    typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 30

  let products = await (categoryQuery === 'All'
    ? getProducts(limitQuery, sortQuery)
    : getProductsByCategory(categoryQuery))

  products = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <main>
      <FilterOption
        searchQuery={searchQuery}
        categoryQuery={categoryQuery}
        limitQuery={limitQuery}
        sortQuery={sortQuery}
      />
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-4'>
        {products.length != 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className='text-lg'>No Products</p>
        )}
      </div>
    </main>
  )
}
