import { ReactNode } from 'react'
import { globalFont } from '@/constants/data'
import '@/styles/globals.css'

export const metadata = {
  title: 'Peng | Portfolio',
  description: 'Portfolio created by Peng',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={globalFont.className}>{children}</body>
    </html>
  )
}
