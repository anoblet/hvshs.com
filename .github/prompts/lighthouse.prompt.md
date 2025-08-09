```prompt
Step 1: Run the lighthouse script (`pnpm lighthouse`).

Goal: Create/update `reports/lighthouse.md` to drive the site toward a perfect Lighthouse score (100 in Performance, Accessibility, Best Practices, SEO) using the latest `reports/lighthouse.json`.

Inputs:
- Read and analyze `reports/lighthouse.json` as the single source of truth.
- If the JSON looks outdated or missing key audits, regenerate it locally (optional): pnpm lighthouse

Output file: `reports/lighthouse.md`

Required sections (in this exact order):
1. Scores
2. Metrics
3. Summary
4. Task List

Section details:
- Scores:
  - Report the four category scores as integers (0–100).
- Metrics:
  - List key performance metrics with units: FCP, LCP, TTI, TBT, CLS, SI.
- Summary:
  - 3–6 tight bullets highlighting primary bottlenecks and the fastest wins.
- Task List:
  - Always use a numbered list for top-level items (1., 2., 3., …).
  - Use nested numbering for subtasks when helpful (1.1., 1.2., …).
  - Order top-level tasks by simplicity/effort from easiest to hardest.
  - Group tasks logically by category when relevant: Performance, Accessibility, Best Practices, SEO.
  - Each task must include:
    - Action: concrete change to make.
    - Why: reference Lighthouse audit(s) by id or name.
    - How: implementation guidance tailored to an Astro + Lit stack when possible.
    - Impact: expected effect on score/metric (qualitative or rough numeric).
    - Effort: S/M/L.
    - Verification: how to validate the improvement (what to re-run or check in the report).

Authoring guidance:
- Prefer actionable changes over generic advice; dedupe overlapping audits under one task with nested subtasks.
- Translate common audits into concrete steps, for example:
  - Render-blocking resources → inline above-the-fold CSS; defer/preload the rest.
  - Reduce unused JS / Main-thread work → code-split; defer non-critical scripts; remove unused libs.
  - Properly size images / Efficient formats → serve sized WebP/AVIF; set width/height; lazy-load offscreen; set fetchpriority for LCP.
  - Preload key requests → preload fonts and the LCP image; use font-display: swap and system fallbacks.
  - Minify/Compress → minify CSS/JS; enable gzip/brotli; long cache TTLs for static assets.
  - Third-party impact → defer/async GTM/analytics; load consent-first; reduce tags to essentials.
  - CLS issues → always set media dimensions; avoid layout shifts from late-loading UI.
  - Accessibility → labels for inputs; roles/landmarks; focus states; color contrast; alt text.
- Keep it concise and scannable. Use code snippets only when they materially clarify “How”.

Acceptance criteria:
- The Task List is numbered and nested where applicable.
- Tasks are ordered from easiest to hardest and map directly to JSON findings.
- The report is immediately actionable by an engineer.
```
