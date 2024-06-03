'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowDownWideNarrow, Search } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

export default function FilterOption({
  searchQuery,
  categoryQuery,
  sortQuery,
  limitQuery,
}: {
  searchQuery: string
  categoryQuery: string
  sortQuery: string
  limitQuery: number
}) {
  const router = useRouter()
  const [search, setSearch] = useState<string>(searchQuery)
  const [select, setSelect] = useState<string>(categoryQuery)
  const [sort, setSort] = useState<string>(sortQuery)
  const [limit, setLimit] = useState<number>(limitQuery)

  const initialRender = useRef(true)
  const [query] = useDebounce(select, 150)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(search ? `/products?search=${search}` : `/products`)
    } else if (query === 'All') {
      if (limit === 30 && sort === 'asc') {
        router.push(search ? `/products?search=${search}` : `/products`)
      } else {
        router.push(
          limit || sort
            ? search
              ? `/products?limit=${limit}&sort=${sort}&search=${search}`
              : `/products?limit=${limit}&sort=${sort}`
            : `/products`
        )
      }
    } else {
      router.push(
        search
          ? `/products?category=${query}&search=${search}`
          : `/products?category=${query}`
      )
    }
  }, [query, search, limit, sort])

  return (
    <div className='flex flex-col md:flex-row justify-between gap-2 pt-2 pb-4'>
      <div className='flex gap-1'>
        <Input
          placeholder='Search Product ...'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <Button
          size={'icon'}
          onClick={() => router.push(`/products?search=${search}`)}
        >
          <Search size={16} />
        </Button>
      </div>

      <Collapsible className='md:w-36 flex flex-col gap-4 items-center md:flex-row-reverse md:items-end'>
        <CollapsibleTrigger asChild>
          <Button variant={'link'}>
            Filter
            <ArrowDownWideNarrow className='w-4 h-4 ml-1' />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='flex flex-col md:flex-row gap-2'>
            <div className='flex items-center gap-2'>
              <Select
                defaultValue={select}
                onValueChange={(value) => setSelect(value)}
              >
                <SelectTrigger className='w-36'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value='All'>All</SelectItem>
                    <SelectItem value='electronics'>Electronics</SelectItem>
                    <SelectItem value='jewelery'>Jewelery</SelectItem>
                    <SelectItem value="men's clothing">
                      Men's clothing
                    </SelectItem>
                    <SelectItem value="women's clothing">
                      Women's clothing
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {select === 'All' && (
              <>
                <div className='flex items-center gap-2'>
                  <Select
                    defaultValue={String(limit)}
                    onValueChange={(value) => setLimit(Number(value))}
                  >
                    <SelectTrigger className='w-36'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Limit</SelectLabel>
                        <SelectItem value='30'>All</SelectItem>
                        <SelectItem value='20'>20</SelectItem>
                        <SelectItem value='15'>15</SelectItem>
                        <SelectItem value='10'>10</SelectItem>
                        <SelectItem value='5'>5 </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className='flex items-center gap-2'>
                  <Select
                    defaultValue={sort}
                    onValueChange={(value) => setSort(value)}
                  >
                    <SelectTrigger className='w-36'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Sort</SelectLabel>
                        <SelectItem value='asc'>Ascending</SelectItem>
                        <SelectItem value='desc'>Descending</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
