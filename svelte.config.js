import preprocess from "svelte-preprocess";
// const static = require('@sveltejs/adapter-static');
import vercel from '@sveltejs/adapter-vercel';
// const node = require('@sveltejs/adapter-node');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		files: {
			assets: 'static'
		}
	},
	// vite: {
	// 	ssr: { noExternal }
	// }
};

export default config;