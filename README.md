# Figma Make Sandbox

A comprehensive learning environment for understanding Figma Make's folder structure and modern web development patterns.

## 🚀 **Live Demo**

Visit the live application: [http://localhost:3000](http://localhost:3000)

## 📋 **About**

This sandbox project demonstrates best practices in modern web development using Figma Make's recommended folder structure and development patterns. It serves as a learning environment for exploring React, TypeScript, and component-driven architecture.

## ✨ **Features**

- **🎨 Component Library** - Reusable UI components with multiple variants
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🔧 TypeScript** - Full type safety throughout the application
- **♿ Accessibility** - ARIA-compliant components with keyboard navigation
- **📚 Documentation** - Comprehensive guides and examples
- **🎯 Examples** - Real-world use cases and implementations

## 🏗️ **Technology Stack**

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Development**: ESLint, Prettier

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

## 🤝 **Contributing**

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 **License**

MIT License - feel free to use this sandbox for learning and experimentation.

## 🆘 **Support**

- Check the [documentation](/docs) first
- Look at [examples](/examples) for use cases
- Open an issue on GitHub for bugs
- Start a discussion for questions

---

**Happy coding! 🚀**

Built with ❤️ for the Figma Make community.
