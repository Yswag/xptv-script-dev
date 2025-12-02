import replace from '@rollup/plugin-replace'

export default {
    input: 'src/debug.js',
    output: {
        file: 'dist/script.js',
        format: 'es',
    },
    external: ['../utils/utils.js', 'crypto-js', 'cheerio', 'axios'],
    plugins: [
        replace({
            preventAssignment: true,
            values: {
                "import { $fetch, jsonify, argsify } from '../utils/utils.js'": '',
                "import CryptoJS from './crypto-js.js'": 'const CryptoJS = createCryptoJS();',
                "import cheerio from './cheerio.js'": 'const cheerio = createCheerio();',
                'export { getCards, getConfig, getPlayinfo, getTracks, search };': '',
            },
        }),
    ],
}
