'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Page() {
  const [loading, isLoading] = useState<boolean>(false)
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(6, {
      message: 'Username must be at least 6 characters.',
    }),

    name: z.object({
      firstname: z.string().min(2),
      lastname: z.string().min(2),
    }),
    password: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters.',
      })
      .max(20),
    address: z.object({
      city: z.string().min(2),
      street: z.string().min(2),
      number: z.number(),
      zipcode: z.string().min(2),
      geolocation: z.object({
        lat: z.string().min(2),
        long: z.string().min(2),
      }),
    }),
    phone: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
      name: {
        firstname: '',
        lastname: '',
      },
      address: {
        city: '',
        street: '',
        number: 0,
        zipcode: '',
        geolocation: {
          lat: '',
          long: '',
        },
      },
      phone: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    isLoading(true)
    const response = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      body: JSON.stringify(values),
    })
    if (response.ok) {
      const data = await response.json()
      isLoading(false)
      toast.success(`Your account is created successfuly`)
      router.push('/products')
    } else {
      isLoading(false)
      toast.error(`Your account isn't created successfuly`)
    }
  }
  return (
    <div className='flex flex-1 h-svh'>
      <div className='w-3/5 mx-auto max-w-4xl pt-8'>
        <div className='flex items-center gap-4 pb-6'>
          <Button size={'sm'} variant={'link'} onClick={() => router.back()}>
            <ArrowLeft size={16} className='mr-1' /> Back
          </Button>
          <h1 className='text-4xl tracking-wider font-semibold'>Sign up</h1>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-6 py-4'
          >
            <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='name.firstname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='name.lastname'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4'>
              <FormField
                control={form.control}
                name='address.city'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.street'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Street</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.zipcode'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.number'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adress Number</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.geolocation.lat'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lat</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='address.geolocation.long'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Long</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type='text' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input disabled={loading} type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='w-full flex justify-end items-center'>
              <Button disabled={loading} type='submit'>
                {loading ? (
                  <Loader2 className='animate-spin h-6 w-6 mx-4' />
                ) : (
                  'Create an account'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className='w-2/5'>
        <div className='relative w-full h-full'>
          <Image
            src={'/signin.jpg'}
            alt='sigin'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  )
}
