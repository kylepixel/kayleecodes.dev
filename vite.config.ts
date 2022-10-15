import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { ssr } from 'vite-plugin-ssr/plugin';

export default defineConfig({
    plugins: [react(), ssr({ prerender: true })],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@renderer': path.resolve(__dirname, 'src/renderer'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
});
