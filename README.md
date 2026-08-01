# Hudson Valley Smart Home Services (hvshs.com)

The official website for Hudson Valley Smart Home Services — smart home design, installation, and support for homes and businesses across the Hudson Valley. Built with Astro, Lit Web Components, and TypeScript.

## ⚡ Lighthouse Scores

[![Lighthouse Performance](https://img.shields.io/badge/Performance-70%2F100-orange?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-hvshs-com/u0qtn8h2zc?form_factor=mobile)
[![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-100%2F100-brightgreen?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-hvshs-com/u0qtn8h2zc?form_factor=mobile)
[![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100%2F100-brightgreen?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-hvshs-com/u0qtn8h2zc?form_factor=mobile)
[![Lighthouse SEO](https://img.shields.io/badge/SEO-100%2F100-brightgreen?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-hvshs-com/u0qtn8h2zc?form_factor=mobile)

> **Note**: Badges show Lighthouse scores from the production deployment at [hvshs.com](https://hvshs.com). Click any badge to view the full PageSpeed Insights report. Scores are updated manually from the latest `pnpm lighthouse` report in `reports/lighthouse.json`.
>
> **Updating Badges**: Currently displays scores for the main production deployment. To update badges after optimization work:
>
> 1. Run `pnpm lighthouse` to generate a new report
> 2. Run `pnpm update:lighthouse-badges` to update README badges automatically

## 🏠 Overview

Hudson Valley Smart Home Services is the online home for a local smart home business serving the Hudson Valley region. The site connects homeowners and businesses with professional smart home design, installation, and support — featuring a component-driven architecture with a focus on accessibility, performance, and maintainability.

## ✨ Features

- **Modern Architecture**: Built with Astro for optimal performance and Lit for reusable web components
- **Component-Driven Design**: Modular, reusable components with scoped styling
- **Theme System**: Dynamic light/dark theme switching with CSS custom properties
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance Optimized**: Static site generation with selective hydration
- **Accessibility First**: Semantic HTML, proper ARIA attributes, and keyboard navigation
- **TypeScript**: Full type safety across the entire codebase
- **Modern Tooling**: ESLint, Prettier, Husky for code quality and consistency

## 🛠 Technology Stack

### Core Framework

- **[Astro 5.7.10](https://astro.build/)** - Static site generator with component islands
- **[Lit 3.3.0](https://lit.dev/)** - Lightweight web components library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks for code quality
- **[Sharp](https://sharp.pixelplumbing.com/)** - Image optimization

### Deployment

- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Static site hosting
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Deployment tooling

## 📁 Project Structure

```
hvshs.com/
├── src/
│   ├── components/          # Reusable web components
│   │   ├── base/           # Base component classes
│   │   ├── button/         # Button components
│   │   ├── card/           # Card layouts
│   │   ├── navigation/     # Navigation components
│   │   └── theme/          # Theme system
│   ├── layouts/            # Astro layout components
│   ├── pages/              # Site pages and routes
│   │   ├── blog/           # Blog posts
│   │   ├── portfolio/      # Projects (residential/commercial)
│   │   └── services/       # Service offerings
│   ├── styles/             # Global styles and themes
│   ├── icons/              # SVG icon components
│   └── assets/             # Static assets
├── genaisrc/               # AI automation scripts
│   └── packages/           # Specialized AI tools
│       ├── comment/        # Code commenting
│       ├── commit/         # Git commit messages
│       ├── message/        # Message generation
│       ├── style/          # Code styling
│       └── utility/        # Shared utilities
└── public/                 # Static files
```

## 🎨 Design System

### Color Palette

- **Primary**: Modern, professional color scheme with CSS custom properties
- **Theme Support**: Dynamic light/dark theme switching
- **Accessibility**: WCAG-compliant contrast ratios

### Typography

- **Primary**: Google Sans for body text
- **Secondary**: Poppins for headings
- **Loading**: Optimized web font loading with preconnect

### Components

- **Atomic Design**: Components built with composition over inheritance
- **Scoped Styles**: CSS-in-JS with Lit's styling system
- **Responsive**: Mobile-first responsive design patterns

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/anoblet/hvshs.com.git
   cd hvshs.com
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

### Development Commands

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Performance & Monitoring
pnpm lighthouse                # Run Lighthouse audit and save report
pnpm update:lighthouse-badges   # Update README badges from latest report

# Deployment
pnpm deploy           # Deploy to Cloudflare Pages
```

## 🏗 Architecture

### Component System

The project uses a hybrid architecture combining:

- **Astro Components**: For static content and layouts
- **Lit Web Components**: For interactive, reusable UI elements
- **Base Classes**: Shared functionality and styling patterns

### Styling Approach

- **Global Styles**: CSS custom properties for theming
- **Component Styles**: Scoped CSS-in-JS with Lit
- **Utility Classes**: Atomic CSS classes for common patterns
- **Theme System**: Dynamic theme switching with local storage persistence

### Performance Strategy

- **Static Generation**: Pre-rendered HTML for optimal loading
- **Component Islands**: Selective hydration for interactivity
- **Image Optimization**: Automatic image processing with Sharp
- **Font Loading**: Optimized web font delivery

## 🤖 AI Integration

The project includes a sophisticated AI automation system powered by GenAIScript:

### GenAI Packages

- **Comment**: Automated code commenting and documentation
- **Commit**: Conventional commit message generation
- **Message**: Content and messaging assistance
- **Style**: Code style analysis and improvements
- **Utility**: Shared AI utilities and helpers

### Features

- **Code Analysis**: Automated code quality assessment
- **Content Generation**: AI-assisted content creation
- **Workflow Automation**: Streamlined development processes
- **Documentation**: Automated documentation generation

## 📄 Content Structure

### Projects

- **Residential Installations**: Whole-home lighting, climate, security, and entertainment
- **Commercial Installations**: Lighting control, access control, HVAC automation, and AV

### Services

- **Smart Home Design**: Custom system planning and device selection
- **Installation & Setup**: Professional device installation and configuration
- **Consultation & Support**: Assessments, troubleshooting, and ongoing support
- **Education & Training**: Learn to use and manage your smart home

### Blog

- **Smart Home Tips**: Practical guidance for homeowners
- **Industry Insights**: Trends and best practices
- **Case Studies**: In-depth project breakdowns

## 🔧 Configuration

### Environment Setup

The project includes comprehensive configuration for:

- **TypeScript**: Strict type checking
- **ESLint**: Custom rules for Astro and Lit
- **Prettier**: Code formatting standards
- **Git Hooks**: Pre-commit code quality checks

### Deployment

Configured for Cloudflare Pages with:

- **Automatic Builds**: Git-based deployment pipeline
- **Performance Optimization**: Edge caching and compression
- **Custom Domain**: Professional domain configuration

## 🎯 Performance

### Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for user experience
- **Bundle Size**: Minimal JavaScript footprint
- **Loading Speed**: Sub-second initial page loads

### Optimization Techniques

- **Static Site Generation**: Pre-rendered HTML
- **Image Optimization**: WebP format with fallbacks
- **Code Splitting**: Component-level code splitting
- **Caching Strategy**: Aggressive caching with cache busting

## 🛡 Security

- **Content Security Policy**: Strict CSP headers
- **HTTPS Only**: Secure connection enforcement
- **Dependency Scanning**: Automated vulnerability detection
- **Safe Deployment**: Staging environment testing

## 🤝 Contributing

This is a personal portfolio project, but contributions are welcome for:

- Bug fixes and improvements
- Performance optimizations
- Accessibility enhancements
- Documentation updates

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Hudson Valley Smart Home Services**

- **Phone**: (914) 417-9070
- **Email**: andrewbnoblet@gmail.com
- **Website**: [hvshs.com](https://hvshs.com)

---

**Built with ❤️ using modern web technologies**

_Current Version: 0.3.0_
