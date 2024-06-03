'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
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
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

export default function LogIn() {
  const [loading, isLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const formSchema = z.object({
    username: z.string().min(6, {
      message: 'Username must be at least 6 characters.',
    }),
    password: z
      .string()
      .min(6, {
        message: 'Password must be at least 6 characters.',
      })
      .max(20),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    isLoading(true)
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (response.ok) {
      const data = await response.json()
      isLoading(false)
      setOpen(false)
      toast.success(`successfuly connected`)
      localStorage.setItem('token', data.token)
    } else {
      isLoading(false)
      toast.error('false username or password')
    }
  }
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <Button>LogIn</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>LogIn</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 py-4'
          >
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
            <DialogFooter>
              <div className='w-full flex justify-between items-center'>
                <Button variant={'link'} asChild>
                  <Link href={'/singup'}>Create an account</Link>
                </Button>
                <Button disabled={loading} type='submit'>
                  {loading ? (
                    <Loader2 className='animate-spin h-6 w-6 mx-4' />
                  ) : (
                    'Log In'
                  )}
                </Button>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
