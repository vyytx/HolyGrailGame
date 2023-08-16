import preprocess from 'svelte-preprocess'

const isDevelopment = true;

/**@type {import('rollup-plugin-svelte').Options} */
const config = {
    compilerOptions: {
        dev: isDevelopment,
    },
    preprocess: preprocess({
        typescript: {
            tsconfigFile: true
        }
    })
}

export default config;