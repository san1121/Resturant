import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Notification from '@/components/Notification'
import NavBar from '@/components/NavBar'
import AuthProvider from '@/components/AuthProvider'
import QueryProvider from '@/components/QueryProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Santosh Resturant',
  description: 'Best Food in town!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <QueryProvider>
        <div>
        <Notification/>
        <NavBar/>
        {children}
        <Footer/>
        <ToastContainer position="bottom-right" theme="dark" autoClose={3000}/>
        </div>
        </QueryProvider>
        </AuthProvider>
       </body>
    </html>
  )
}
