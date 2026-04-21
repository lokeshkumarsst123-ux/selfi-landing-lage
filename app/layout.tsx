import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Self-i | AI-Powered Property Management Platform',
  description: 'Manage your property without agents. All-in-one AI-powered platform for property owners and tenants in Australia.',
  keywords: ['property management', 'rental', 'AI', 'Australia', 'landlord', 'tenant'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}

      </body>
    </html>
  )
}
