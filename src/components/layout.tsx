"use client"

import * as React from "react"
import { Navigation } from "@/components/navigation"
import { NavigationItem } from "@/types"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "components",
    title: "Components",
    href: "/components",
  },
  {
    id: "examples",
    title: "Examples",
    href: "/examples",
  },
  {
    id: "docs",
    title: "Documentation",
    href: "/docs",
  },
]

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation items={navigationItems} />
      <main className={className}>
        {children}
      </main>
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2025 Figma Make Sandbox. Built for learning and experimentation.
            </p>
            <p className="mt-2">
              Understanding Figma Make&apos;s folder structure and best practices.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}