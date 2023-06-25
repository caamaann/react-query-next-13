'use client'

import '@/assets/style/main.scss'
import {Inter} from 'next/font/google'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import SEO from '@/components/globals/SEO'

const inter = Inter({subsets: ['latin']})

const queryClient = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false}}})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <SEO />
        <body className={inter.className}>
          {children}
          <ReactQueryDevtools />
        </body>
      </html>
    </QueryClientProvider>
  )
}
