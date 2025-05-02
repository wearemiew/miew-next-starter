import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Miew Next Starter',
    description: 'A Simple NextJs Starter with TailwindCSS and TypeScript',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
