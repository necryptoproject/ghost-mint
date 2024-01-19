import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	plugins: [
		sveltekit(),
		svg({
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: { overrides: { removeViewBox: false, cleanupIds: false } }
					},
					{ name: 'removeAttrs', params: { attrs: '(width|height)' } }
				]
			}
		})
	],
	server: {
		port: 9876
	}
});
