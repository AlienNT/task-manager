import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import autoprefixer from 'autoprefixer'
import * as path from "node:path";

export default defineConfig(({mode}) => {
    const base = mode === 'production' ? '/task-manager/' : '/'
    return {
        plugins: [vue()],
        css: {
            postcss: {
                plugins: [autoprefixer]
            },
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "src/assets/css/variables/index.scss";`,
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        base
    }
})
