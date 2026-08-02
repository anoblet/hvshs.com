#!/usr/bin/env node

/**
 * Home Page Screenshot Script
 *
 * Takes a full-page screenshot of the home page for use as a social media
 * post attachment and saves it in both PNG and WebP formats.
 *
 * Usage:
 *   node scripts/screenshot-home.js
 *
 * Requirements:
 *   - Development server running on http://localhost:4321
 *   - Playwright browser installed
 *   - cwebp binary available in bin/ directory
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCREENSHOT_DIR = '.screenshots';
const DEV_SERVER_URL = 'http://localhost:4321';
const BROWSER_WIDTH = 1280;
const BROWSER_HEIGHT = 800;

async function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Created directory: ${dirPath}`);
  }
}

async function checkDevServer() {
  try {
    const response = await fetch(DEV_SERVER_URL);
    if (response.ok) {
      console.log('✓ Development server is running');
      return true;
    }
  } catch (error) {
    console.log('✗ Development server is not running');
    console.log('Please start the development server with: pnpm run dev');
    return false;
  }
}

async function takeHomeScreenshot() {
  console.log('🎯 Starting home page screenshot process...');

  // Ensure screenshots directory exists
  await ensureDirectoryExists(SCREENSHOT_DIR);

  // Check if dev server is running
  if (!(await checkDevServer())) {
    process.exit(1);
  }

  // Launch browser
  console.log('🚀 Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Set viewport size
    await page.setViewportSize({
      width: BROWSER_WIDTH,
      height: BROWSER_HEIGHT,
    });
    console.log(`✓ Set browser viewport to ${BROWSER_WIDTH}x${BROWSER_HEIGHT}`);

    // Navigate to home page
    console.log('📄 Navigating to home page...');
    await page.goto(DEV_SERVER_URL);
    await page.waitForLoadState('networkidle');

    // Wait for hero component to load
    await page.waitForSelector('hero-component');
    console.log('✓ Hero component loaded');

    // Take full-page screenshot
    console.log('📸 Taking full-page screenshot...');
    const screenshotPath = path.join(SCREENSHOT_DIR, 'facebook-home.png');
    await page.screenshot({
      path: screenshotPath,
      type: 'png',
      fullPage: true,
    });
    console.log(`✓ Home page saved: ${screenshotPath}`);
  } finally {
    await browser.close();
    console.log('✓ Browser closed');
  }
}

async function convertToWebP() {
  console.log('🔄 Converting PNG file to WebP format...');

  const pngFile = 'facebook-home.png';
  const inputPath = path.join(SCREENSHOT_DIR, pngFile);
  const outputPath = path.join(
    SCREENSHOT_DIR,
    pngFile.replace('.png', '.webp')
  );

  try {
    const cwebpPath = path.join(__dirname, '..', 'bin', 'cwebp');
    execSync(`${cwebpPath} "${inputPath}" -o "${outputPath}"`, {
      stdio: 'pipe',
    });
    console.log(`✓ Converted: ${pngFile} → ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${pngFile}:`, error.message);
  }
}

async function main() {
  try {
    console.log('🏠 Home Page Screenshot Generator');
    console.log('=================================');

    await takeHomeScreenshot();
    await convertToWebP();

    console.log('\n✅ All screenshots completed successfully!');
    console.log(`📁 Files saved in: ${SCREENSHOT_DIR}/`);
    console.log('   • facebook-home.png');
    console.log('   • facebook-home.webp');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
main();

export { convertToWebP, takeHomeScreenshot };
