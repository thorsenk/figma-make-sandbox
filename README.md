# Figma Make Sandbox

> **The definitive reference for understanding Figma Make's baseline project structure**

Understanding what Figma Make provides out-of-the-box versus what you need to build is crucial for effective AI-assisted development. This repository documents the complete starting foundation that every new Figma Make project begins with.

## 🎯 Purpose

When you create a new project in Figma Make, you're not starting with an empty folder. You get a comprehensive, production-ready foundation that includes:

- Complete shadcn/ui component library (60+ components)
- Full design system with theme support
- Figma-specific utilities and components
- Professional styling and accessibility features

This repository captures that exact starting state to help developers:
- **Plan projects effectively** - Know what's included vs. what to build
- **Optimize AI prompts** - Reference available components in your requests
- **Accelerate development** - Leverage the full foundation provided
- **Understand capabilities** - See the scope of Figma Make's built-in tooling

## 🚀 **Live Demo**

Visit the live application: [http://localhost:3000](http://localhost:3000)

## 📁 What's Included

### Minimal Application Entry Point
```
App.tsx - Simple "Hello, World!" starting point
```

### Complete shadcn/ui Component Library
```
components/ui/
├── accordion.tsx          ├── navigation-menu.tsx
├── alert-dialog.tsx       ├── pagination.tsx
├── alert.tsx             ├── popover.tsx
├── aspect-ratio.tsx      ├── progress.tsx
├── avatar.tsx            ├── radio-group.tsx
├── badge.tsx             ├── resizable.tsx
├── breadcrumb.tsx        ├── scroll-area.tsx
├── button.tsx            ├── select.tsx
├── calendar.tsx          ├── separator.tsx
├── card.tsx              ├── sheet.tsx
├── carousel.tsx          ├── sidebar.tsx
├── chart.tsx             ├── skeleton.tsx
├── checkbox.tsx          ├── slider.tsx
├── collapsible.tsx       ├── sonner.tsx
├── command.tsx           ├── switch.tsx
├── context-menu.tsx      ├── table.tsx
├── dialog.tsx            ├── tabs.tsx
├── drawer.tsx            ├── textarea.tsx
├── dropdown-menu.tsx     ├── toggle-group.tsx
├── form.tsx              ├── toggle.tsx
├── hover-card.tsx        ├── tooltip.tsx
├── input-otp.tsx         ├── use-mobile.ts
├── input.tsx             └── utils.ts
├── label.tsx
├── menubar.tsx
```

### Figma-Specific Components
```
components/figma/
└── ImageWithFallback.tsx - Handles image loading with fallback states
```

### Production-Ready Design System
```
styles/
└── globals.css - Complete theme system with:
                 • Light/dark mode support
                 • CSS custom properties
                 • Typography scales
                 • Color palettes
                 • Spacing system
                 • Border radius scales
```

## 🎨 Design System Features

### Theme Support
- **Light & Dark modes** - Automatic theme switching
- **CSS Custom Properties** - Consistent design tokens
- **Color Palette** - Primary, secondary, accent, muted, destructive colors
- **Typography** - Scalable font system with proper weights

### Accessibility Built-in
- **Focus management** - Proper focus rings and keyboard navigation
- **ARIA attributes** - Semantic markup for screen readers
- **Color contrast** - WCAG compliant color combinations
- **Responsive design** - Mobile-first approach

### Component Architecture
- **Radix UI Primitives** - Unstyled, accessible base components
- **Tailwind CSS** - Utility-first styling system
- **TypeScript** - Full type safety
- **Composable patterns** - Flexible component composition

## 🚀 **Quick Start**

### Prerequisites

- Node.js 18+ and npm
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thorsenk/figma-make-sandbox.git
   cd figma-make-sandbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 **Available Pages**

- **Home** (`/`) - Project overview and features
- **Components** (`/components`) - Interactive component showcase
- **Documentation** (`/docs`) - Comprehensive guides and setup
- **Examples** (`/examples`) - Real-world implementations

## 🛠️ **Development Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Check TypeScript types
```

## 🎯 How to Use This Information

### For Project Planning
Use this inventory to understand what's already available:
- ✅ **UI Components** - 60+ components ready to use
- ✅ **Design System** - Complete theming and styling
- ✅ **Accessibility** - Built-in WCAG compliance
- ❌ **Business Logic** - Your specific application logic
- ❌ **Data Layer** - API integrations and state management
- ❌ **Custom Components** - Your unique UI requirements

### For AI Prompting
Reference available components in your Figma Make prompts:
```
"Create a dashboard using the Card, Table, and Button components"
"Build a form with Input, Select, and Textarea from the UI library"
"Design a navigation using the existing Sidebar and NavigationMenu components"
```

### For Development Strategy
Focus your development efforts on:
1. **Application logic** - Your unique business requirements
2. **Data integration** - APIs, databases, external services
3. **Custom components** - Specialized UI not covered by shadcn/ui
4. **Workflow optimization** - Figma-specific integrations and automations

## 📋 Component Categories

### Layout & Structure
`Card`, `Separator`, `AspectRatio`, `ResizablePanel`, `Sidebar`

### Navigation
`NavigationMenu`, `Breadcrumb`, `Pagination`, `Tabs`, `Command`

### Forms & Input
`Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Calendar`, `Form`

### Feedback & Status
`Alert`, `Progress`, `Skeleton`, `Sonner`, `Tooltip`, `Badge`

### Overlays & Modals
`Dialog`, `Sheet`, `Drawer`, `Popover`, `HoverCard`, `AlertDialog`

### Data Display
`Table`, `Chart`, `Avatar`, `Carousel`, `ScrollArea`

### Interactive
`Button`, `Toggle`, `ToggleGroup`, `DropdownMenu`, `ContextMenu`, `Menubar`, `Collapsible`, `Accordion`

## 🎨 **Component Library**

### Available Components

- **Button** - Multiple variants (default, secondary, destructive, outline, ghost, link)
- **Card** - Flexible content containers with header, content, and footer
- **Navigation** - Responsive navigation with mobile menu
- **Layout** - Page wrapper with consistent structure

### Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 📚 **Documentation**

- **[Getting Started Guide](docs/getting-started.md)** - Installation and setup
- **[Component Development Guide](docs/components.md)** - Best practices and patterns
- **[Project Structure](docs/structure.md)** - Folder organization explanation

## 🎯 **Learning Objectives**

This sandbox demonstrates:

1. **Modern React Patterns** - Hooks, composition, and best practices
2. **TypeScript Integration** - Type-safe development
3. **Component Architecture** - Reusable, composable components
4. **Styling Systems** - Tailwind CSS with design tokens
5. **Project Organization** - Clean, scalable folder structure
6. **Accessibility** - Inclusive design principles
7. **Performance** - Optimized builds and loading

## 📁 **Project Structure**

```
figma-make-sandbox/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── components/         # Component showcase
│   │   ├── docs/              # Documentation
│   │   ├── examples/          # Examples & use cases
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Base UI components
│   │   ├── layout.tsx        # Layout wrapper
│   │   └── navigation.tsx    # Navigation component
│   ├── styles/               # Global styles
│   ├── types/                # TypeScript definitions
│   └── utils/                # Utility functions
├── docs/                     # Documentation files
├── public/                   # Static assets
└── [configuration files]
```

## 🔧 **Customization**

### Adding New Components

1. Create component file in `src/components/ui/`
2. Follow the established patterns
3. Add TypeScript types in `src/types/`
4. Update documentation

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/styles/globals.css` for global styles
- Use CSS variables for design tokens

## 📖 Guidelines & Best Practices

### Project Organization
Consider creating a `guidelines/` folder in your Figma Make projects to document:
- **Design system customizations** - Brand-specific modifications to the base theme
- **Component usage patterns** - Standard implementations for your use cases
- **Prompting strategies** - Effective AI prompts that leverage available components
- **Integration patterns** - How to connect UI components to your data layer

### Development Workflow
1. **Start with inventory** - Review available components before building custom ones
2. **Leverage the design system** - Use CSS custom properties for consistency
3. **Compose over create** - Combine existing components rather than building from scratch
4. **Customize thoughtfully** - Extend the base theme rather than overriding it

## 🤝 **Contributing**

This repository serves as a reference for the Figma Make community. If you notice:
- **Outdated information** - Components or structure changes in new Figma Make versions
- **Missing documentation** - Additional baseline files or features not covered
- **Improvement opportunities** - Better organization or explanation of the foundation

Please open an issue or submit a pull request.

## 🔗 Related Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library used by Figma Make
- [awesome-shadcn-ui](https://awesome-shadcn-ui.vercel.app/) - Extended shadcn/ui component collections
- [Radix UI](https://www.radix-ui.com/) - Primitive components underlying shadcn/ui
- [Tailwind CSS](https://tailwindcss.com/) - Utility framework for styling

## 📄 **License**

MIT License - feel free to use this sandbox for learning and experimentation.

## 🆘 **Support**

- Check the [documentation](/docs) first
- Look at [examples](/examples) for use cases
- Open an issue on GitHub for bugs
- Start a discussion for questions

---

**💡 Remember**: Figma Make gives you a professional kitchen with all the tools. This repository shows you what's in the cabinets so you can focus on cooking your specific dish.

**Happy coding! 🚀**

Built with ❤️ for the Figma Make community.
