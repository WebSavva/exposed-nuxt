import { describe, it, expect } from 'vitest';
import { fileURLToPath } from 'node:url';
import { setup, createPage } from '@nuxt/test-utils/e2e';

describe('basic stuff', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/custom-name', import.meta.url)),
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

    await page.waitForFunction(() => typeof window.$customNuxt !== 'undefined');

    const isCustomName = await page.evaluate(
      () => window.$customNuxt.$config.public.isCustomName,
    );

    expect(isCustomName).toBe(true);
  });
});
