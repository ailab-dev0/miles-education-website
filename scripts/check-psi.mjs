import { chromium } from 'playwright';

const urls = [
  { name: 'HOME', url: 'https://ailab-dev0.github.io/miles-education-website/' },
  { name: 'CPA', url: 'https://ailab-dev0.github.io/miles-education-website/#/cpa' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const { name, url } of urls) {
    console.log(`\n=== Checking ${name} page on PSI ===`);
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

    await page.goto('https://pagespeed.web.dev/', { waitUntil: 'networkidle', timeout: 30000 });

    // Enter URL and submit
    const input = page.locator('input[type="url"], input[name="url"]').first();
    await input.waitFor({ timeout: 10000 });
    await input.fill(url);
    await page.keyboard.press('Enter');

    console.log('Waiting for PSI analysis (up to 3 min)...');

    // Wait for results by polling for score text
    let scores = [];
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(3000);
      scores = await page.evaluate(() => {
        const els = document.querySelectorAll('.lh-gauge__percentage');
        const s = [];
        els.forEach(el => {
          const txt = el.textContent?.trim();
          if (txt && /^\d+$/.test(txt)) s.push(parseInt(txt));
        });
        return s;
      });
      if (scores.length >= 4) break;
      if (i % 10 === 0) console.log(`  ...still waiting (${i * 3}s, found ${scores.length} scores so far)`);
    }

    // Screenshot
    await page.screenshot({ path: `/tmp/psi-${name.toLowerCase()}.png`, fullPage: false });
    console.log(`Screenshot: /tmp/psi-${name.toLowerCase()}.png`);

    if (scores.length >= 4) {
      console.log(`Performance: ${scores[0]}`);
      console.log(`Accessibility: ${scores[1]}`);
      console.log(`Best Practices: ${scores[2]}`);
      console.log(`SEO: ${scores[3]}`);
    } else if (scores.length > 0) {
      console.log(`Scores found: ${scores.join(', ')}`);
    } else {
      console.log('Could not extract scores');
      // Try alternate extraction
      const alt = await page.evaluate(() => {
        const text = document.body.innerText;
        const match = text.match(/Performance\s*(\d+)/i);
        return match ? match[1] : null;
      });
      if (alt) console.log(`Performance (alt): ${alt}`);
    }

    await page.close();
  }

  await browser.close();
})();
