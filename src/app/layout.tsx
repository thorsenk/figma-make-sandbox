import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Figma Make Sandbox",
  description: "Understanding Figma Make's folder structure and best practices",
  keywords: ["figma", "make", "sandbox", "components", "typescript", "nextjs"],
  authors: [{ name: "Figma Make Sandbox Team" }],
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 