import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Mail, MessageSquare, Settings, User } from "lucide-react"
import Link from "next/link"

export default function ExamplesPage() {
  return (
    <Layout>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Examples & Use Cases
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples and practical implementations using our component library.
            </p>
          </div>

          {/* Dashboard Example */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Dashboard Layout</h2>
            <Card>
              <CardHeader>
                <CardTitle>Admin Dashboard</CardTitle>
                <CardDescription>
                  A complete dashboard layout using our components and design system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">
                        +12% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Messages</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">567</div>
                      <p className="text-xs text-muted-foreground">
                        +8% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Events</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">89</div>
                      <p className="text-xs text-muted-foreground">
                        +3% from last month
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Settings</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">
                        Active configurations
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-end">
                  <Button asChild>
                    <Link href="#dashboard-demo">
                      View Full Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Form Example */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Contact Form</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  A complete contact form with validation and responsive design.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="rounded border-input"
                    />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <Button type="submit">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                    <Button type="button" variant="outline">
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Pricing Cards */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Pricing Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small teams</CardDescription>
                  <div className="text-3xl font-bold">$9<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Up to 5 users
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Basic features
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Best for growing businesses</CardDescription>
                  <div className="text-3xl font-bold">$29<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Up to 25 users
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Advanced features
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Analytics dashboard
                    </li>
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="text-3xl font-bold">$99<span className="text-lg text-muted-foreground">/month</span></div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Unlimited users
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      All features
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      24/7 support
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      Custom integrations
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Feature Grid */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Feature Grid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage users, roles, and permissions with ease.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>
                    Configure your application with powerful settings.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Communication</CardTitle>
                  <CardDescription>
                    Built-in messaging and notification system.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Event Scheduling</CardTitle>
                  <CardDescription>
                    Schedule and manage events with calendar integration.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Email Integration</CardTitle>
                  <CardDescription>
                    Seamless email integration and automation.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Workflow Automation</CardTitle>
                  <CardDescription>
                    Automate repetitive tasks and workflows.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Code Examples */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">Implementation Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dashboard Implementation</CardTitle>
                  <CardDescription>
                    How to create a dashboard layout with our components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto">
{`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,234</div>
        </CardContent>
      </Card>
      {/* More cards... */}
    </div>
  )
}`}
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Implementation</CardTitle>
                  <CardDescription>
                    How to build forms with proper styling and validation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button"

function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="email"
        className="w-full px-3 py-2 border rounded-md"
        placeholder="Email"
      />
      <Button type="submit">
        Send Message
      </Button>
    </form>
  )
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}