# Astronautical Apogee — Project Analysis & Improvement Plan (GPT‑5)

Analysis date: 2025‑08‑07  
Branch: develop

## Executive summary
The project is strong: Astro 5 + Lit 3 stack, atomic CSS utilities, strict tooling (pnpm, Husky, lint‑staged, Prettier), Cloudflare deploy, MCP discipline. Recent wins: icon consolidation, page‑specific meta descriptions, business card automation, content growth. Key opportunities now are simplification, performance polish, testing, and analytics. Focus on removing runtime styling/theming overhead, tightening font/JS budgets, enabling Astro linting, and adding a lean E2E test suite.

## Top priorities (quick wins)
1) Fonts: reduce weight ranges and self‑host
- Limit to used weights (e.g., Noto Sans 400; Poppins 600/700).  
- Self‑host via Astro assets; subset latin; add `font-display: swap`.  
- Expected: ~40–90KB savings, faster LCP.

2) ESLint for `.astro`
- `eslint.config.js` currently ignores `**/*.astro`. Enable `eslint-plugin-astro` configs and remove ignore.  
- Expected: catch template issues and dead attributes early.

3) Blog ordering intent
- `src/pages/blog.astro` defines `originalPosts`/`generatedPosts`, but final `posts` uses a single sort that ignores the original-vs-AI split. Restore intended ordering (non‑AI first) if that’s the preference.

4) Default layout cleanup
- Move inline `<style>` blocks in `src/layouts/default.astro` into utility classes/global styles; keep layout HTML clean.  
- Evaluate need for `ClientRouter` (astro:transitions). If not essential, remove to improve LCP.

5) Wrangler naming and metadata
- Update `wrangler.jsonc` name from `my-astro-app` to the project name; keep file valid JSONC (trailing commas are allowed but avoid if unnecessary).

## Architecture & styling
- Global style consolidation: `src/styles/global.ts` (~460+ lines) mixes utilities, element resets, and brand tokens. Split into:  
  - tokens (colors, spacing, typography scale),  
  - base (resets, element defaults),  
  - utilities (utility classes only),  
  - components (scoped patterns if truly shared).  
  This improves discoverability and keeps atomic utilities simple.
- Runtime CSS adoption: `default.astro` imports and adopts `globalStyles` at runtime. Prefer shipping CSS as static assets where possible to reduce JS execution during startup. Keep Lit component styles component‑scoped; move truly global rules to a CSS file.
- Theming: `applyStoredTheme` + body `data-media` is fine. Consider `prefers-color-scheme` default and only override on user action to reduce first‑load JS.
- Duplication: there are both `.font-weight-5/6/8` and `.font-weight-500/600/700/800` utilities. Unify naming to one scheme to avoid confusion.

## Performance
- Fonts (above) are the largest quick win.  
- Third‑party: GTM snippet runs inline in `<head>` and injects async script. Keep as‑is if needed for marketing attribution, but audit tags for bloat. Consider a privacy‑friendly analytics alternative and run GTM only when required.  
- Transitions: remove `ClientRouter` if transitions aren’t a must-have.  
- Images: ensure Astro’s image pipeline is used for large assets. Consider `astro:assets` for responsive images in content and pages.  
- JS budget: verify that all custom elements used site‑wide justify global registration in layout. Lazy‑register where possible.

## SEO & content
- Meta descriptions added (good). Next: add JSON‑LD structured data:  
  - Person (site owner), WebSite + SearchAction, Organization (if preferred), Article for blog posts, BreadcrumbList.  
- OpenGraph/Twitter cards per page.  
- Blog schema: `src/content.config.ts` is clean; consider adding optional `tags` and `canonical` fields for future use.  
- Internal linking: add contextual links between services ↔ portfolio ↔ blog to improve topical authority.

## Accessibility
- Keep skip link (present).  
- Ensure focus states are clearly visible for interactive elements using CSS vars.  
- Verify ARIA for custom elements (icons decorative → `aria-hidden="true"`; interactive components have roles/labels).  
- Re‑audit color contrast after any token changes.

## Testing & CI/CD
- Testing: adopt `@playwright/test` already in devDependencies. Start with 6–8 critical flows:  
  - Navigation hide/show behavior (desktop/mobile).  
  - Consultation booking link and footer contact component.  
  - Blog index → post detail navigation.  
  - Portfolio cards: tags position/flow and CTAs.  
  - Business card page renders front/back correctly.  
  - About page sections load as expected.  
- CI: add GitHub Actions: lint, typecheck, build, and Playwright tests on PR. Optional: Lighthouse CI on the built preview.

## Analytics & observability
- Define event taxonomy in GTM (or alternative): page_view, nav_interaction, consultation_click, cta_click, blog_to_consultation.  
- Add Core Web Vitals RUM (e.g., web‑vitals to your analytics endpoint).  
- Error tracking: Sentry (or equivalent) for client errors with sampling.

## Developer experience
- Keep pnpm/wireit. Add wireit targets for `lint`, `format`, `test`, and sequence them in `build`.  
- ESLint: turn on `eslint-plugin-astro` and remove ignore for `.astro`.  
- VS Code: add `.vscode/extensions.json` recommendations (Astro, ESLint, Prettier, Lit plugins).  
- Dependabot/Renovate for dependency hygiene.

## Content & marketing
- Case studies: expand portfolio items with challenge → approach → outcome → metrics.  
- Blog cadence: 2 posts/month. Close each post with a contextual CTA to consultation.  
- Newsletter: lightweight signup (privacy‑friendly), placed on blog pages and about.

## Phased plan (effort → impact)
- Week 1: Fonts optimization, enable Astro linting, restore blog ordering intent, rename Wrangler project, remove unnecessary inline styles in layout.  
- Weeks 2–3: Structured data, OG/Twitter cards, initial Playwright suite + CI.  
- Weeks 4–6: Global style modularization, theme runtime reduction, analytics taxonomy + RUM, initial portfolio case study deep‑dives.

## File hotspots to review
- `src/layouts/default.astro`: inline CSS, fonts, ClientRouter, global component registration.  
- `src/styles/global.ts` and `src/styles/utility.ts`: split modules, dedupe utilities.  
- `src/pages/blog.astro`: ordering logic and link targets.  
- `eslint.config.js`: stop ignoring `**/*.astro`, enable astro configs.  
- `wrangler.jsonc`: project name and metadata.

## Success criteria
- PageSpeed 95–100 across key pages after fonts/JS budget changes.  
- ESLint covers `.astro` files (zero high‑severity lint issues).  
- 8+ Playwright tests stable in CI on PRs.  
- Rich results visible for articles and organization/person.  
- 20–30% bump in consultation clicks from blog/portfolio via internal links and CTAs.

—
Prepared by: GitHub Copilot
