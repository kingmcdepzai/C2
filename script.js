const puppeteer = require('puppeteer');

async function run() {
  console.log('🚀 Running automated script...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('✅ Script completed!');
  await browser.close();
}

run().catch(console.error);