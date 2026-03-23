import { chromium } from 'playwright';

const urls = [
  { name: 'HOME', url: 'https://ailab-dev0.github.io/miles-education-website/' },
  { name: 'CPA', url: 'https://ailab-dev0.github.io/miles-education-website/#/cpa' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (const { name, url } of urls) {
    console.log(`\n=== ${name} ===`);
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

    await page.goto('https://pagespeed.web.dev/', { waitUntil: 'networkidle', timeout: 30000 });
    const input = page.locator('input[type="url"], input[name="url"]').first();
    await input.waitFor({ timeout: 10000 });
    await input.fill(url);
    await page.keyboard.press('Enter');

    // Wait for scores
    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(3000);
      const count = await page.evaluate(() => {
        const els = document.querySelectorAll('.lh-gauge__percentage');
        let c = 0;
        els.forEach(el => { if (/^\d+$/.test(el.textContent?.trim())) c++; });
        return c;
      });
      if (count >= 4) break;
    }

    // Extract detailed metrics
    const metrics = await page.evaluate(() => {
      const result = {};
      // Scores
      const gauges = document.querySelectorAll('.lh-gauge__percentage');
      const labels = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
      gauges.forEach((el, i) => {
        const txt = el.textContent?.trim();
        if (txt && /^\d+$/.test(txt) && i < 4) result[labels[i]] = parseInt(txt);
      });
      // Metrics table
      document.querySelectorAll('.lh-metric').forEach(m => {
        const title = m.querySelector('.lh-metric__title')?.textContent?.trim();
        const value = m.querySelector('.lh-metric__value')?.textContent?.trim();
        if (title && value) result[title] = value;
      });
      // Opportunities
      const opps = [];
      document.querySelectorAll('.lh-audit--load-opportunity').forEach(a => {
        const title = a.querySelector('.lh-audit__title')?.textContent?.trim();
        const savings = a.querySelector('.lh-audit__description')?.textContent?.trim();
        if (title) opps.push(title);
      });
      result['opportunities'] = opps;
      return result;
    });

    // Print
    for (const [k, v] of Object.entries(metrics)) {
      if (k === 'opportunities') {
        console.log('Opportunities:');
        v.forEach(o => console.log(`  - ${o.substring(0, 100)}`));
      } else {
        console.log(`${k}: ${v}`);
      }
    }

    // Full page screenshot with metrics visible
    await page.evaluate(() => window.scrollTo(0, 300));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `/tmp/psi-detail-${name.toLowerCase()}.png`, fullPage: false });

    await page.close();
  }

  await browser.close();
})();
