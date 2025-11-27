import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/three/main.ts'),
            name: 'locar',
            fileName: format => `locar.${format}.js`
        },
        rollupOptions: {
            external: ['three'],
            output: {
                globals: {
                    three: 'THREE'
                }
            }
        }
//		minify: 'none'
    }
});
