#!/usr/bin/env node
// @ts-check

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Updates Lighthouse badges in README.md based on the latest report
 */
function updateLighthouseBadges() {
  try {
    // Read the lighthouse report
    const reportPath = join(process.cwd(), 'reports', 'lighthouse.json');
    const report = JSON.parse(readFileSync(reportPath, 'utf-8'));

    // Extract scores (multiply by 100 to get percentage)
    const performance = Math.round(report.categories.performance.score * 100);
    const accessibility = Math.round(
      report.categories.accessibility.score * 100
    );
    const bestPractices = Math.round(
      report.categories['best-practices'].score * 100
    );
    const seo = Math.round(report.categories.seo.score * 100);

    // Determine colors based on scores
    const getColor = score => {
      if (score >= 90) return 'brightgreen';
      if (score >= 70) return 'yellow';
      if (score >= 50) return 'orange';
      return 'red';
    };

    // Generate new badge URLs
    const badges = [
      `[![Lighthouse Performance](https://img.shields.io/badge/Performance-${performance}%2F100-${getColor(performance)}?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-andrewnoblet-com/u0qtn8h2zc?form_factor=mobile)`,
      `[![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-${accessibility}%2F100-${getColor(accessibility)}?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-andrewnoblet-com/u0qtn8h2zc?form_factor=mobile)`,
      `[![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-${bestPractices}%2F100-${getColor(bestPractices)}?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-andrewnoblet-com/u0qtn8h2zc?form_factor=mobile)`,
      `[![Lighthouse SEO](https://img.shields.io/badge/SEO-${seo}%2F100-${getColor(seo)}?style=flat-square&logo=lighthouse)](https://pagespeed.web.dev/analysis/https-andrewnoblet-com/u0qtn8h2zc?form_factor=mobile)`,
    ];

    // Read current README
    const readmePath = join(process.cwd(), 'README.md');
    let readme = readFileSync(readmePath, 'utf-8');

    // Find and replace the badges section
    const badgeRegex = /(\[!\[Lighthouse Performance\].*?\)\n){4}/s;
    const newBadges = badges.join('\n') + '\n';

    readme = readme.replace(badgeRegex, newBadges);

    // Write updated README
    writeFileSync(readmePath, readme);

    console.log('✅ Lighthouse badges updated successfully!');
    console.log(`📊 Performance: ${performance}/100`);
    console.log(`♿ Accessibility: ${accessibility}/100`);
    console.log(`⚡ Best Practices: ${bestPractices}/100`);
    console.log(`🔍 SEO: ${seo}/100`);
  } catch (error) {
    console.error('❌ Error updating badges:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updateLighthouseBadges();
}

export { updateLighthouseBadges };
