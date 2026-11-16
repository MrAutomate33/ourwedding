import { cpSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [{
    name: 'retain-static-assets',
    closeBundle() {
      // Classic scripts and dynamically referenced images retain their existing URLs.
      for (const asset of ['img', 'js', 'favicon.svg', '.nojekyll']) {
        cpSync(resolve(root, asset), resolve(root, 'dist', asset), { recursive: true });
      }
    },
  }],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        // Fluent's client-boundary directives are redundant in this browser-only build.
        if (
          warning.code === 'MODULE_LEVEL_DIRECTIVE'
          && warning.message.includes('"use client"')
          && /node_modules[\\/]@(fluentui|griffel)[\\/]/.test(warning.message)
        ) {
          return;
        }
        defaultHandler(warning);
      },
      input: {
        index: resolve(root, 'index.html'),
        wedding: resolve(root, 'wedding.html'),
        accommodation: resolve(root, 'accommodation.html'),
        dresscode: resolve(root, 'dresscode.html'),
        notFound: resolve(root, '404.html'),
      },
    },
  },
});
