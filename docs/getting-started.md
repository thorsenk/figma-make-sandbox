# Getting Started

Welcome to the Figma Make Sandbox! This guide will help you get up and running with the project.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thorsenk/figma-make-sandbox.git
   cd figma-make-sandbox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

The project follows a well-organized structure:

```
figma-make-sandbox/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # Reusable UI components
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   ├── types/                  # TypeScript definitions
│   ├── styles/                 # Global styles
│   └── assets/                 # Static assets
├── public/                     # Public files
├── docs/                       # Documentation
└── examples/                   # Example implementations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Beautiful icons

## Next Steps

1. Explore the [Component Library](/components) to see available UI components
2. Check out the [Examples](/examples) for practical use cases
3. Read the [Documentation](/docs) for detailed guides
4. Start building your own components and pages

## Contributing

Feel free to contribute to this project by:

- Adding new components
- Improving documentation
- Creating examples
- Fixing bugs

## Support

If you have any questions or need help, please:

1. Check the documentation first
2. Look at existing examples
3. Open an issue on GitHub

Happy coding! 🚀