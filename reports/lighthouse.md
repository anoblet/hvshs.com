# Lighthouse Performance Report

## Scores

- **Performance**: 73/100
- **Accessibility**: 94/100
- **Best Practices**: 100/100
- **SEO**: 100/100

## Metrics

- **First Contentful Paint (FCP)**: 2.1s
- **Largest Contentful Paint (LCP)**: 2.3s
- **Time to Interactive (TTI)**: 3.5s
- **Total Blocking Time (TBT)**: 990ms
- **Cumulative Layout Shift (CLS)**: 0.045
- **Speed Index (SI)**: 3.0s

## Summary

- **Main Performance Bottleneck**: Excessive main-thread work (4.5s) causing high Total Blocking Time (990ms)
- **Render-Blocking Issue**: CSS file blocking first paint, causing 300ms delay
- **Script Performance**: 901ms spent on script evaluation impacting interactivity
- **Accessibility Gap**: Link without discernible name affecting screen reader users
- **Quick Wins**: Font display optimization, render-blocking CSS elimination, main-thread work reduction

## Task List

### 1. Optimize Main-Thread Work
- **Action**: Reduce JavaScript execution time from 4.5s to under 2s
- **Why**: `mainthread-work-breakdown` audit shows 4492ms of main-thread work, with 901ms in script evaluation
- **How**: 
  - Code-split JavaScript bundles to defer non-critical scripts
  - Use dynamic imports for components not needed above-the-fold
  - Remove or defer unused JavaScript libraries
  - Implement tree-shaking in build process
- **Impact**: Could reduce TBT by up to 1000ms, significantly improving Performance score
- **Effort**: L
- **Verification**: Re-run Lighthouse and check TBT < 300ms, main-thread work < 2000ms

### 2. Eliminate Render-Blocking CSS
- **Action**: Inline critical CSS and defer non-critical styles
- **Why**: `render-blocking-resources` audit shows 300ms savings available from CSS file blocking first paint
- **How**:
  - Extract above-the-fold CSS and inline it in the HTML `<head>`
  - Use `media="print" onload="this.media='all'"` for non-critical CSS
  - Implement critical CSS extraction in Astro build process
- **Impact**: 300ms reduction in FCP and LCP
- **Effort**: M
- **Verification**: Re-run Lighthouse and verify render-blocking-resources audit passes

### 3. Fix Link Accessibility
- **Action**: Add accessible name to calendar link
- **Why**: `link-name` audit fails due to link without discernible text for screen readers
- **How**:
  - Add `aria-label="Schedule consultation"` to the calendar link in contact component
  - Or include visually hidden text: `<span class="sr-only">Schedule consultation</span>`
  - Located in: `contact-component` with href `https://calendar.app.google/JjnLtVR6mnM11FcS9`
- **Impact**: Fixes accessibility score gap, improves screen reader experience
- **Effort**: S
- **Verification**: Re-run Lighthouse and verify link-name audit passes

### 4. Implement Font Display Optimization
- **Action**: Add `font-display: swap` to web fonts
- **Why**: `font-display` audit suggests optimizing font loading to reduce layout shifts
- **How**:
  - Add `font-display: swap` to all `@font-face` declarations
  - Consider using `font-display: optional` for non-critical fonts
  - Implement font fallback metrics to reduce CLS
- **Impact**: Reduces perceived loading time, improves CLS
- **Effort**: S
- **Verification**: Check font-display audit and verify CLS remains under 0.1

### 5. Optimize Critical Request Chains
- **Action**: Reduce font loading chain length and preload critical fonts
- **Why**: 13 critical request chains found, fonts loaded sequentially after CSS
- **How**:
  - Preload the most critical fonts (Noto Sans 400, 600 weights) in HTML head
  - Add `<link rel="preload" href="/_astro/noto-sans-latin-400-normal.DBaOTIGl.woff2" as="font" type="font/woff2" crossorigin>`
  - Consider subsetting fonts to reduce transfer size
- **Impact**: Faster font loading, reduced FCP/LCP
- **Effort**: M
- **Verification**: Check critical-request-chains audit for reduced chain count

### 6. Reduce Style & Layout Work
- **Action**: Optimize CSS and reduce layout recalculations
- **Why**: 876ms spent on Style & Layout work contributing to main-thread blocking
- **How**:
  - Review CSS for complex selectors and simplify
  - Avoid layout-triggering CSS properties in animations
  - Use CSS containment where appropriate
  - Minimize DOM complexity in Lit components
- **Impact**: Reduces main-thread work, improves TBT
- **Effort**: M
- **Verification**: Check mainthread-work-breakdown for reduced Style & Layout time

### 7. Script Evaluation Optimization
- **Action**: Optimize JavaScript parsing and execution
- **Why**: 901ms spent on script evaluation blocking main thread
- **How**:
  - Use `defer` attribute on non-critical scripts
  - Implement module preloading for critical Lit components
  - Consider using Web Workers for heavy computations
  - Minify and compress JavaScript bundles
- **Impact**: Reduces TBT and improves TTI
- **Effort**: L
- **Verification**: Check Script Evaluation time in mainthread-work-breakdown audit

- Source: reports/lighthouse.json (v12). Astro + Lit stack, pnpm. Changes prioritize minimal risk and high ROI.
