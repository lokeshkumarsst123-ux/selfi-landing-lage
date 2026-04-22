import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

import './globals.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit"
});

export const metadata: Metadata = {
  title: 'Self-i | Property Management Made Easy',
  description: 'Manage your property without agents. All-in-one AI-powered platform for property owners and tenants in Australia.',
  keywords: ['property management', 'rental', 'AI', 'Australia', 'landlord', 'tenant'],
  icons: {
    icon: '/icon-dark-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}

      </body>
    </html>
  )
}
