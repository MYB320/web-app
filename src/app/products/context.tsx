import { Product } from '@/lib/interface'
import React, { createContext, useState } from 'react'

type ConstextType = {
  products: Product[]
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
}

export const ProductsContext = createContext<ConstextType>({} as ConstextType)

const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([])
  const addProduct = (product: Product) => {
    product.Quantite = 1
    const productArr = products
    setProducts([...productArr, product])
  }
  const removeProduct = (product: Product) => {
    const newproducts = products.filter(
      (addedproduct) => addedproduct.id !== product.id
    )
    setProducts(newproducts)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
