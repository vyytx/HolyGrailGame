import svelte from 'rollup-plugin-svelte';
import svelteConfig from './svelte.config.js'
import css from "rollup-plugin-css-only";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const isDev = process.env.ROLLUP_WATCH;

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
        svelte({
            dev: isDev,
            ...svelteConfig
        }),
        css({
            output: "bundle.css"
        }),
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        isDev && await startDevSever()
    ]
}

async function startDevSever() {
    let started = false;

    return {
        writeBundle() {
            if(!started) {
                started = true;

                import('node:child_process').then(
                    cp => {
                        cp.spawn('npm', ['run', 'serve'], {
                            stdio: ['ignore', 'inherit', 'inherit'],
                            shell: true
                        })
                    }
                );
            }
        }
    }
}


export default config;