'use client'

import { motion } from 'framer-motion'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='relative flex flex-col gap-4 items-center justify-center px-4'
      >
        <div className='text-3xl md:text-7xl font-semibold dark:text-white text-center'>
          Welecome To Weasy <span className='text-primary'>Shop</span>
        </div>
        <div className='font-extralight text-base md:text-4xl dark:text-neutral-200 py-4'>
          Checkout Our Multiple Products Now.
        </div>
        <Button size={'lg'} className='rounded-full' asChild>
          <Link href={'/products'}>Check Our Shop</Link>
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
