import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://simon20060610.github.io',
  integrations: [mdx(), sitemap()],
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
