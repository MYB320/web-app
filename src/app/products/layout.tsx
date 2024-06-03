'use client'
import Navbar from '@/components/navbar'
import Container from '@/components/Container'
import ProductsProvider from './context'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProductsProvider>
      <Container>
        <Navbar />
        {children}
      </Container>
    </ProductsProvider>
  )
}
