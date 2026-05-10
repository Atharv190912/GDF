import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Global Diplomatic Foundation',
  description: 'The Global Diplomatic Foundation fosters a culture of dialogue, leadership, and international cooperation.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
