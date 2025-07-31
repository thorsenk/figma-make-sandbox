import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Palette, BookOpen, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
            Figma Make Sandbox
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Understanding Figma Make's folder structure and best practices. 
            A comprehensive learning environment for exploring modern web development patterns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/components">
                Explore Components
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/docs">
                Read Documentation
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What's Inside
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand and experiment with Figma Make's development patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Component Library</CardTitle>
                <CardDescription>
                  Reusable UI components built with modern React patterns and TypeScript.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Design System</CardTitle>
                <CardDescription>
                  Consistent styling with Tailwind CSS and custom design tokens.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides and examples for every component and pattern.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Examples</CardTitle>
                <CardDescription>
                  Real-world examples and use cases for practical learning.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Structure Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Project Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organized folder structure following Figma Make best practices.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm">
            <pre className="whitespace-pre-wrap">
{`figma-make-sandbox/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components
│   │   └── navigation.tsx  # Navigation component
│   ├── pages/              # Page components and layouts
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions and helpers
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Global styles and CSS modules
│   └── assets/             # Static assets (images, icons, etc.)
├── public/                 # Public static files
├── docs/                   # Documentation and guides
├── examples/               # Example implementations
└── tests/                  # Test files`}
            </pre>
          </div>
        </div>
      </section>
    </Layout>
  )
} 