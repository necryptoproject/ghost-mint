import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter({
		// 	// See below for an explanation of these options
		// 	routes: {
		// 		include: ['/*'],
		// 		exclude: ['<all>']
		// 	}
		// })
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			precompress: true,
			fallback: 'index.html'
		})
	},
	preprocess: vitePreprocess()
};
export default config;
