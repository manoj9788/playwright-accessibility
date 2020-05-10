const playwright = require('playwright');
const assert = require('assert');
let browser, page, context;

before(async() => {
  browser = await playwright['firefox'].launch({ headless: false });
});

after(async () => {
  await browser.close();
});

beforeEach(async() => {
  context = await browser.newContext();
  page = await browser.newPage();
});

afterEach(async () => {
  await page.close();
});

it('dump accessibility tree', async () => {
  await page.goto('https://stackoverflow.com/'); 
  const snapshot = await page.accessibility.snapshot();
  console.log(snapshot);
});
