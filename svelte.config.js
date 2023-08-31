import preprocess from 'svelte-preprocess';

const {typescript, scss} = preprocess;

const isDevelopment = true;

/**@type {import('rollup-plugin-svelte').Options} */
const config = {
    compilerOptions: {
        dev: isDevelopment,
    },
    preprocess: [
        typescript({
            tsconfigFile: true,
        }),
        scss({
            includePaths: ['src/client/scss', 'node_modules']
        })
    ]
}

export default config;