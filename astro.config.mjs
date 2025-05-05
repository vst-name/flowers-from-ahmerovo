// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ahmerovo.ru/',
	output: 'static',
	compressHTML: true,
	scopedStyleStrategy: 'class',
	build: {
		inlineStylesheets: `always`, // 'always' | 'auto' | 'never'
		concurrency: 10, // default: 1
	},
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport', // 'tap' | 'hover' | 'viewport' | 'load'
	},
	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [react(), partytown(), sitemap()],
});
