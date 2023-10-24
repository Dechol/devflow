import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import React from 'react'
 
export const metadata:Metadata = {
  title: 'Next.js 13 with Clerk',
  description:'Community platform for developers to ask and answer programming questions.'
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}