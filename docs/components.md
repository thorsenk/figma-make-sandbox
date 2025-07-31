# Component Development Guide

This guide covers how to create and use components in the Figma Make Sandbox.

## Component Structure

All components follow a consistent structure:

```tsx
import * as React from "react"
import { cn } from "@/utils/cn"

interface ComponentProps {
  className?: string
  children?: React.ReactNode
  // ... other props
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-classes", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Component.displayName = "Component"

export { Component }
```

## Key Principles

### 1. TypeScript First
All components should be written in TypeScript with proper type definitions:

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "destructive"
  size?: "sm" | "md" | "lg"
}
```

### 2. Accessibility
Components should be accessible by default:

```tsx
// Use semantic HTML elements
<button
  role="button"
  aria-label="Close dialog"
  aria-pressed={isPressed}
>
  Close
</button>
```

### 3. Composition
Make components composable and flexible:

```tsx
// Good: Composable components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Avoid: Monolithic components
<Card title="Title" content="Content" />
```

### 4. Styling
Use Tailwind CSS with the `cn` utility for conditional classes:

```tsx
import { cn } from "@/utils/cn"

const className = cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  className // Allow custom classes
)
```

## Available Components

### Button
A versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui/button"

<Button variant="default" size="md">
  Click me
</Button>
```

**Variants:** `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`
**Sizes:** `sm`, `md`, `lg`, `icon`

### Card
A container component for content organization.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Navigation
A responsive navigation component with mobile menu support.

```tsx
import { Navigation } from "@/components/navigation"

const items = [
  { id: "home", title: "Home", href: "/" },
  { id: "about", title: "About", href: "/about" }
]

<Navigation items={items} />
```

## Creating New Components

### 1. Create the Component File
Create a new file in the appropriate directory:

```bash
# For UI components
touch src/components/ui/new-component.tsx

# For feature components
touch src/components/feature-component.tsx
```

### 2. Write the Component
Follow the component structure pattern:

```tsx
import * as React from "react"
import { cn } from "@/utils/cn"

interface NewComponentProps {
  className?: string
  children?: React.ReactNode
  // Add your specific props here
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-styles", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

NewComponent.displayName = "NewComponent"

export { NewComponent }
```

### 3. Add Type Definitions
Update the types file if needed:

```tsx
// src/types/index.ts
export interface NewComponentProps {
  // Add your component types here
}
```

### 4. Export the Component
Add the component to the appropriate index file:

```tsx
// src/components/ui/index.ts
export { NewComponent } from "./new-component"
```

## Best Practices

### 1. Naming Conventions
- Use PascalCase for component names
- Use kebab-case for file names
- Use descriptive names that indicate purpose

### 2. Props Design
- Keep props simple and focused
- Use optional props with sensible defaults
- Extend HTML element props when appropriate

### 3. Styling
- Use Tailwind CSS utility classes
- Create reusable design tokens
- Support dark mode when applicable

### 4. Testing
- Write tests for component behavior
- Test accessibility features
- Test responsive design

### 5. Documentation
- Add JSDoc comments for complex components
- Include usage examples
- Document prop types and variants

## Example: Creating a Badge Component

Here's a complete example of creating a Badge component:

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"

export { Badge, badgeVariants }
```

## Resources

- [Radix UI Documentation](https://www.radix-ui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)