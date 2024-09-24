
import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import liveReload from 'vite-plugin-live-reload';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        liveReload('../listless/**/*.js', '../listless/public/*.html', '../listless/public/*.css')
    ],
    root: 'public',
    build: {
        outDir: '../dist',
    },
    server: {
        proxy: {
            '/api': 'http://localhost:3000',
            '/': 'http://localhost:3000'
        },
        watch: {
            usePolling: true
        }
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './public'),
        },
    },
});
