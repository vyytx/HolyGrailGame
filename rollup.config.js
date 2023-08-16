import svelte from 'rollup-plugin-svelte';
import svelteConfig from './svelte.config.js'
import css from "rollup-plugin-css-only";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/**@type {import('rollup').RollupOptions} */
const config = {
    input: 'src/client/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js',
    },
    plugins: [
        //replacer for %...%,
        svelte(svelteConfig),
        css({
            output: "bundle.css"
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
    ]
}

export default config;