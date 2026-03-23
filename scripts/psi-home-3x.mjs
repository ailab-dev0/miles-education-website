import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });

  for (let run = 1; run <= 3; run++) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await page.goto('https://pagespeed.web.dev/', { waitUntil: 'networkidle', timeout: 30000 });
    const input = page.locator('input[type="url"], input[name="url"]').first();
    await input.waitFor({ timeout: 10000 });
    await input.fill('https://ailab-dev0.github.io/miles-education-website/');
    await page.keyboard.press('Enter');

    for (let i = 0; i < 60; i++) {
      await page.waitForTimeout(3000);
      const scores = await page.evaluate(() => {
        const els = document.querySelectorAll('.lh-gauge__percentage');
        const s = [];
        els.forEach(el => { const t = el.textContent?.trim(); if (t && /^\d+$/.test(t)) s.push(parseInt(t)); });
        return s;
      });
      if (scores.length >= 4) {
        const metrics = await page.evaluate(() => {
          const r = {};
          document.querySelectorAll('.lh-metric').forEach(m => {
            const t = m.querySelector('.lh-metric__title')?.textContent?.trim();
            const v = m.querySelector('.lh-metric__value')?.textContent?.trim();
            if (t && v) r[t] = v;
          });
          return r;
        });
        console.log(`Run ${run}: Performance=${scores[0]} | FCP=${metrics['First Contentful Paint']} | LCP=${metrics['Largest Contentful Paint']} | TBT=${metrics['Total Blocking Time']} | CLS=${metrics['Cumulative Layout Shift']}`);
        break;
      }
    }
    await page.close();
  }
  await browser.close();
})();
