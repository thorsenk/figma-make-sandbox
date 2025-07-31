import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, FileText, GitBranch, Package, Settings } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Documentation
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and documentation for the Figma Make Sandbox project.
            </p>
          </div>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle>Getting Started</CardTitle>
                  </div>
                  <CardDescription>
                    Learn how to set up and run the project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#getting-started">View Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <CardTitle>Component Library</CardTitle>
                  </div>
                  <CardDescription>
                    Explore available UI components and their usage.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/components">View Components</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <CardTitle>Project Structure</CardTitle>
                  </div>
                  <CardDescription>
                    Understand the folder organization and architecture.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="#project-structure">View Structure</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Getting Started */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Getting Started</h2>
            <Card>
              <CardHeader>
                <CardTitle>Installation & Setup</CardTitle>
                <CardDescription>
                  Follow these steps to get the project running on your local machine.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Node.js 18+ and npm</li>
                    <li>Git for version control</li>
                    <li>A code editor (VS Code recommended)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Installation Steps</h3>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <pre className="whitespace-pre-wrap">
{`# Clone the repository
git clone https://github.com/thorsenk/figma-make-sandbox.git
cd figma-make-sandbox

# Install dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Available Scripts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <code className="text-sm font-medium">npm run dev</code>
                      <p className="text-xs text-muted-foreground mt-1">Start development server</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <code className="text-sm font-medium">npm run build</code>
                      <p className="text-xs text-muted-foreground mt-1">Build for production</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <code className="text-sm font-medium">npm run start</code>
                      <p className="text-xs text-muted-foreground mt-1">Start production server</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <code className="text-sm font-medium">npm run lint</code>
                      <p className="text-xs text-muted-foreground mt-1">Run ESLint</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Project Structure */}
          <section id="project-structure" className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Project Structure</h2>
            <Card>
              <CardHeader>
                <CardTitle>Folder Organization</CardTitle>
                <CardDescription>
                  Understanding the project's folder structure and organization patterns.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
{`figma-make-sandbox/
├── src/                          # Source code directory
│   ├── app/                      # Next.js App Router pages
│   │   ├── components/           # Component showcase page
│   │   ├── docs/                 # Documentation page
│   │   ├── examples/             # Examples page
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Base UI components
│   │   │   ├── button.tsx        # Button component
│   │   │   └── card.tsx          # Card component
│   │   ├── layout.tsx            # Layout wrapper
│   │   └── navigation.tsx        # Navigation component
│   ├── hooks/                    # Custom React hooks
│   ├── utils/                    # Utility functions
│   │   └── cn.ts                 # Class name utility
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # Main type definitions
│   ├── styles/                   # Global styles
│   │   └── globals.css           # Global CSS with Tailwind
│   └── assets/                   # Static assets
├── public/                       # Public static files
├── docs/                         # Documentation files
├── examples/                     # Example implementations
├── tests/                        # Test files
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
└── README.md                     # Project documentation`}
                  </pre>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Directories Explained</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-foreground">src/app/</h4>
                        <p className="text-sm text-muted-foreground">
                          Next.js App Router pages and layouts. Each folder represents a route.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">src/components/</h4>
                        <p className="text-sm text-muted-foreground">
                          Reusable UI components organized by functionality and complexity.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">src/types/</h4>
                        <p className="text-sm text-muted-foreground">
                          TypeScript type definitions for components, API responses, and data models.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">src/utils/</h4>
                        <p className="text-sm text-muted-foreground">
                          Utility functions and helpers used throughout the application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Technology Stack */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Framework</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Next.js 14</h4>
                  <p className="text-sm text-muted-foreground">
                    React framework with App Router, server-side rendering, and optimized performance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle>Language</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">TypeScript</h4>
                  <p className="text-sm text-muted-foreground">
                    Type-safe JavaScript with enhanced developer experience and better code quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <CardTitle>Styling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Tailwind CSS</h4>
                  <p className="text-sm text-muted-foreground">
                    Utility-first CSS framework for rapid UI development and consistent design.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Components</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Radix UI</h4>
                  <p className="text-sm text-muted-foreground">
                    Accessible, unstyled UI primitives for building high-quality design systems.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <CardTitle>Icons</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Lucide React</h4>
                  <p className="text-sm text-muted-foreground">
                    Beautiful, customizable SVG icons for modern web applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                    <CardTitle>Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">ESLint + Prettier</h4>
                  <p className="text-sm text-muted-foreground">
                    Code quality tools for consistent formatting and error detection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Best Practices</h2>
            <Card>
              <CardHeader>
                <CardTitle>Development Guidelines</CardTitle>
                <CardDescription>
                  Follow these best practices for consistent and maintainable code.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Component Development</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use TypeScript for all components with proper type definitions</li>
                    <li>Follow the single responsibility principle</li>
                    <li>Make components composable and reusable</li>
                    <li>Use forwardRef for components that need ref forwarding</li>
                    <li>Include proper accessibility attributes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">File Organization</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Group related components in the same directory</li>
                    <li>Use index files for clean imports</li>
                    <li>Keep component files focused and not too large</li>
                    <li>Use descriptive file and folder names</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Styling Guidelines</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Use Tailwind CSS utility classes for styling</li>
                    <li>Create custom CSS variables for design tokens</li>
                    <li>Use the cn utility for conditional class names</li>
                    <li>Follow mobile-first responsive design</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  )
} 