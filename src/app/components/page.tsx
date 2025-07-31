import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Heart, Star, Zap } from "lucide-react"

export default function ComponentsPage() {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Component Library
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of reusable UI components built with modern React patterns.
            </p>
          </div>

          {/* Button Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Buttons</h2>
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>
                  Different button styles for various use cases.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Card Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>
                    A simple card with header, content, and footer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is the card content area where you can put any content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <CardTitle>Featured Card</CardTitle>
                  </div>
                  <CardDescription>
                    A card with an icon and featured content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card has an icon in the header and special styling.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Action Card</CardTitle>
                  <CardDescription>
                    A card with action buttons in the footer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This card demonstrates how to add actions.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm">Primary Action</Button>
                    <Button variant="outline" size="sm">Secondary</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Layout Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Layout Components</h2>
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
                <CardDescription>
                  Responsive navigation with mobile menu support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The navigation component is already visible at the top of this page. 
                  It includes responsive design, active state management, and mobile menu functionality.
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <code className="text-sm">
                    {`<Navigation items={navigationItems} />`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Code Examples */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Usage Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Button Component</CardTitle>
                  <CardDescription>
                    How to use the Button component with different variants.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button"

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>

// With sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// With icons
<Button size="icon">
  <Heart className="h-4 w-4" />
</Button>`}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Component</CardTitle>
                  <CardDescription>
                    How to use the Card component with its sub-components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto">
{`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>
                  Learn how to use these components in your own projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-medium">Quick Start</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All components are built with TypeScript and include proper type definitions. 
                  They're designed to be composable and customizable to fit your design system.
                </p>
                
                <div className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-primary" />
                  <span className="font-medium">Installation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Components use Tailwind CSS for styling and Radix UI for accessibility. 
                  Make sure to install the required dependencies.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </Layout>
  )
} 