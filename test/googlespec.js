const {chromium} = require('playwright');
const assert = require('assert');
let browser;
before(async() => {
  browser = await chromium.launch();
});
after(async () => {
  await browser.close();
});
let page;
beforeEach(async() => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});
it('Google Title', async () => {
  await page.goto('https://google.com/');
  assert.equal(await page.title(), 'Google');
});
