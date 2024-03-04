import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'node:url';
import { setup, createPage } from '@nuxt/test-utils/e2e';

describe('Basic functionality', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
    browser: true,
    browserOptions: {
      type: 'chromium',
      launch: {
        headless: true,
      },
    },
  });

  it('$nuxt is attached to window', async () => {
    const page = await createPage('/');

    await page.waitForFunction(() => typeof window.$nuxt !== 'undefined');

    const foo = await page.evaluate(() => window.$nuxt.$config.public.foo);

    expect(foo).toBe(true);
  });

  it('onNuxtReady is attached to window', async () => {
    const page = await createPage('/');

    await page.waitForSelector('#ready-cb-times-5');

    const text = await page
      .$('#ready-cb-times-5')
      .then((el) => el?.textContent());

    expect(text?.trim()).toBe('Nuxt ready callback was called 5 times');
  });
});
