# Lighthouse Task Checklist

This checklist is distilled from reports/lighthouse.json to reach or maintain 100s across Performance, Accessibility, Best Practices, and SEO.

## Performance
- [ ] Preload critical webfont(s) used by the LCP text (hero heading). Add <link rel="preload" as="font" type="font/woff2" crossorigin> and use font-display: swap.
- [ ] Ensure no render-blocking CSS/JS: inline critical CSS, defer non-critical CSS (media or onload swap), and add defer/async to non-critical scripts.
- [ ] Reduce JS on the main thread: audit bundles, remove unused code, enable tree-shaking, and prefer Astro islands/SSR over client JS where possible.
- [ ] Eliminate unused JavaScript and CSS flagged in the report.
- [ ] Add preconnect/dns-prefetch for top third-party origins that are needed early (limit to ~4).
- [ ] Preload the LCP resource if it’s an image or font; add fetchpriority="high" to the LCP image if applicable.
- [ ] Lazy-load offscreen images and embeds; ensure loading="lazy" and decoding="async".
- [ ] Serve modern image formats (WebP/AVIF) for all large images; resize images to display size and provide width/height to reserve space.
- [ ] Enable Brotli/Gzip for all text assets (JS/CSS/HTML/SVG/JSON).
- [ ] Review critical request chains and shorten where possible (remove redirects, split bundles, inline tiny assets).
- [ ] Address long main-thread tasks; break up heavy work and defer non-urgent tasks to idle callbacks.
- [ ] Verify HTTP/2 or HTTP/3 for all origins.

## Stability (CLS)
- [ ] Add explicit width/height or CSS aspect-ratio for all images/media/iframes to prevent layout shifts.
- [ ] Avoid non-composited animations; prefer transform/opacity and will-change where appropriate.
- [ ] Use font-display: swap and preload fonts to reduce FOIT/FOUT shifting.
- [ ] Reserve space for dynamic components (hero, nav, async content) with min-height.

## Third‑party
- [ ] Reduce/replace heavy third-party scripts; self-host where possible.
- [ ] Lazy-load third-party widgets with a facade (YouTube, maps, embeds) until user interaction.
- [ ] Defer analytics/heatmaps until after first interaction or when idle.

## Accessibility
- [ ] Fix any ARIA role/attribute warnings (aria-allowed-attr, aria-allowed-role, required parents/children).
- [ ] Ensure all interactive controls have accessible names and are keyboard focusable with visible focus.
- [ ] Use landmarks (<header>, <nav>, <main>, <footer>) and ensure DOM order follows the visual order.
- [ ] Provide text alternatives for images/icons and hide purely decorative ones from AT.

## Best Practices & Security Headers
- [ ] Add a strong Content-Security-Policy (script-src, object-src 'none', base-uri 'none', upgrade-insecure-requests, etc.).
- [ ] Enable HSTS (Strict-Transport-Security) with a safe max-age and includeSubDomains; consider preload after validation.
- [ ] Mitigate clickjacking (X-Frame-Options: DENY or CSP frame-ancestors 'none').
- [ ] Consider Trusted Types (require-trusted-types-for 'script') if injecting HTML.
- [ ] Mark passive listeners for touch/wheel events where appropriate.

## SEO
- [ ] Ensure each page has a unique <title> and meta description.
- [ ] Add canonical URL and verify robots.txt and sitemap.xml.
- [ ] Use descriptive link text; ensure mobile legible font sizes (>=12px) and tap targets.
- [ ] Add structured data (Person/Organization, WebSite, BlogPosting) where applicable.

## PWA (if desired)
- [ ] Provide a complete web app manifest (name, icons incl. maskable, theme/background colors) and link it.
- [ ] Register a service worker with basic offline caching for static assets and pages.

## Diagnostics to review in the report
- [ ] Third-party summary blocking time (~600 ms): identify and prioritize items to defer/remove.
- [ ] Main thread work breakdown: verify “Script Evaluation/Parsing” time and target the worst offenders.
- [ ] Largest Contentful Paint element: confirm it’s intended (hero heading/text) and optimized.
- [ ] Image aspect ratio/size diagnostics: fix any mismatches highlighted.
