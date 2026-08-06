# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Infrastructure

- Switched deployment from Cloudflare Workers (Wrangler) to Firebase Hosting

## [0.3.0] - 2026-08-06

### Branding

- Standardized the business name to "Hudson Valley Smart Home Solutions" across the site, metadata, and docs
- Fixed `/service-area` title and H1 (previously "Tarrytown Smart Home Solutions")
- Centralized page-title branding in `default.astro` with a `pageTitle` guard — appends " | Hudson Valley Smart Home Solutions" to `<title>`, `og:title`, and `twitter:title` without doubling when the title already contains the name
- Added light/dark `<meta name="theme-color">` tags (`#f5f5f5` light / `#262626` dark)
- Updated stale brand references in `README.md` and `INSTRUCTIONS.md` ("Smart Home Services" → "Smart Home Solutions")

### Accessibility

- Fixed dark-mode WCAG contrast violations on card-based pages (`/pricing`, `/service-area`, `/mentorship`, etc.):
  - Defined `card-background-color: var(--color-neutral-800)` in `src/themes/dark.json`
  - Made `PricingCard` surfaces and text theme-aware via `--text-color` / `--h2-color` tokens (removed light-only background override)
  - Made `.option-card` and `.savings-note` surfaces theme-aware in `src/styles/global.ts`; dark-mode `strong` now uses `sky-200`
- Fixed `/service-area` CTA horizontal overflow at narrow viewports (`minmax(0, 1fr)` grid track + `flex-wrap`)

### Performance

- Added `fetchpriority="high"` to the hero (LCP) image — Lighthouse Performance stable at 93 (target ≥ 80)

### Testing & Tooling

- Updated `lighthouserc.cjs` audit URL port 4321 → 4322
- Added `/business-card`, `/lit`, `/settings`, `/theme` to `src/pages/sitemap.xml.ts`

## [0.1.1] - 2025-08-10

### Added

- Comprehensive deployment workflow with automated version bumping
- Version tagging system for release tracking
- Enhanced documentation updates for releases

### Changed

- Updated project to SPA mode with Google-style loading bar
- Improved memory system integration with prompt history tracking
- Enhanced MCP server configuration with centralized management

### Fixed

- Utility exports duplicate causing build errors
- Interstitial loading FOUC (Flash of Unstyled Content) issues
- Consultation page component import missing

### Infrastructure

- Deployed version 0.1.1 to production at https://my-astro-app.andrewbnoblet.workers.dev
- Updated Git workflow with proper conventional commit standards
- Enhanced submodule propagation system

## [0.1.0] - 2025-08-10

### Added

- Initial SPA conversion with Google-style loading bar
- Astro ViewTransitions for smooth page navigation
- Dynamic blog post routing for SPA mode
- Comprehensive loading state management

### Changed

- Converted from static site to Single Page Application
- Updated Astro configuration to server mode with Node adapter
- Enhanced navigation experience with seamless transitions

### Infrastructure

- First production deployment to Cloudflare Workers
- Established version tagging and release workflow

## [0.0.2] - 2025-08-09

### Added

- Lighthouse performance optimization cycles
- Atomic CSS utility classes for better performance
- Accessibility improvements across all components

### Changed

- Eliminated render-blocking CSS using utility classes
- Improved tag component contrast for better accessibility
- Enhanced interstitial loading mechanism

### Fixed

- Various performance bottlenecks identified by Lighthouse audits
- Theme color inheritance for SVG components
- Navigation spacing and layout improvements

## [0.0.1] - 2025-07-27

### Added

- Initial project setup with Astro and Lit
- Component-driven architecture
- Theme system with light/dark mode
- Portfolio and blog functionality
- Business card component system
- Contact and consultation booking system

### Infrastructure

- ESLint and Prettier configuration
- Husky git hooks for code quality
- Cloudflare deployment pipeline
- MCP server integration for development workflow
