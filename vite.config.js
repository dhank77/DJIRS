import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins : [
        react(),
    ],
    resolve : {
        alias : {
            '@' : path.resolve('resources/js'),
        }
    },
    base : 'static',
    build: {
        outDir: 'static/build',
        rollupOptions : {
            input : [
                'resources/js/app.jsx'
            ]
        }
    }
  })