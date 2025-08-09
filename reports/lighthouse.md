## Scores

- Performance: 67
- Accessibility: 94
- Best Practices: 96
- SEO: 100

## Metrics

- FCP: 2.2 s
- LCP: 2.7 s (LCP element: section > media-component > h1.grid > span.font-weight-800; 81% render delay)
- Speed Index: 2.4 s
- TTI: 6.4 s
- TBT: 1,590 ms
- CLS: 0.017

## Summary

- Performance is held back primarily by main-thread work (5.2 s) and third‑party JS (GTM/GA) blocking ~1.0 s, inflating TBT to 1.59 s and delaying TTI to 6.4 s.
- LCP is text (hero H1) and is good at 2.7 s; render delay dominates, so reducing long tasks and render‑blocking CSS will improve it further.
- One small render‑blocking CSS file (`about.*.css`, ~4.3 KiB) adds ~229 ms; inlining critical CSS on the affected route will remove this.
- Unused JS from GTM/GA (~108 KiB potential) contributes to bootup-time; load GA after user interaction and use a facade to defer execution on initial view.
- No image size/format issues; CLS is healthy. Server TTFB is great (50 ms). One console error is from GA collect failing when blocked; this affects Best Practices.

## Task List

1) Third‑party and JS execution (biggest TBT wins)
	1. Defer GA/GTM during initial load; switch to a consent/interaction facade (maps: third-party-summary, unused-javascript, errors-in-console).
		- Astro: gate GA init behind a lightweight facade component rendered after user interaction (e.g., dismiss banner or first navigation). Use island/hydration only when needed.
		- Lit: if a Lit component initializes analytics, wrap init in requestIdleCallback or an interaction event, and guard with feature flags.
	2. Reduce main-thread work and bootup time (maps: mainthread-work-breakdown, bootup-time).
		- Audit client:only components. Prefer server-side/static rendering with Astro where possible; convert non-interactive Lit islands to static HTML.
		- Split heavy modules behind onVisible importer or dynamic import in Astro islands/Lit components.

2) Render‑blocking and LCP polish
	1. Inline critical CSS for about route and defer the rest (maps: render-blocking-resources).
		- Extract above‑the‑fold styles (~4–5 KiB) into the page head via an Astro `<style>` block and load the generated CSS with `media="print" onload` or `rel="preload" as="style"` fallback.
	2. Ensure hero text paints ASAP (maps: largest-contentful-paint-element).
		- Keep webfonts with `font-display: swap` (already set). Provide system fallbacks and avoid layout‑thrashing in hero.

3) Trim unused third‑party bytes
	- Scope GA config to minimal required features and disable unused plugins (maps: unused-javascript).
	- Consider server‑side analytics or lightweight alternatives if acceptable.

4) Hygiene and verification
	- Fix console error from blocked GA collect by handling fetch failures or gating requests (maps: errors-in-console).
	- Keep preconnects limited to critical origins only (gtm/ga already added) (maps: uses-rel-preconnect).
	- Re‑run Lighthouse after changes; target TBT < 200 ms and TTI < 3.5 s.

Notes

- Source: reports/lighthouse.json (v12). Astro + Lit stack, pnpm. Changes prioritize minimal risk and high ROI.
