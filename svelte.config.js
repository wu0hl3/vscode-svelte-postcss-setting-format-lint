import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import postcss from './postcss.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		postcss
	})
};

export default config;
