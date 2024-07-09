import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saroprock.com',
  style: {
    scss: {
      includePaths: ['./src/styles']
    }
  },
  integrations: [mdx(), sitemap(), tailwind(), playformCompress()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },
  build: {
    outDir: 'public',
  }
});