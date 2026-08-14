import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

// Routes must match every <Route path="..."> in App.tsx (excluding the
// "*" catch-all). GitHub Pages has no server-side rewrite, so a hard
// refresh or direct link to e.g. /officers 404s unless a real
// officers/index.html exists in the published output.
const routes = ['news', 'newsletters', 'officers', 'aaii/officers'];

export default defineConfig({
  // Custom domain (CNAME: www.bhsnaa1.org) serves from root — no base
  // subpath needed, unlike a project-page deploy at username.github.io/repo/.
  base: '/',
  plugins: [
    react(),
    {
      name: 'gh-pages-spa-routes',
      closeBundle() {
        for (const route of routes) {
          mkdirSync(resolve('dist', route), { recursive: true });
          copyFileSync(resolve('dist/index.html'), resolve('dist', route, 'index.html'));
        }
        // Fallback for any unmatched path (NotFoundPage's "*" route) —
        // GH Pages serves 404.html automatically when no matching file exists.
        copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'));
      },
    },
  ],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        // Wrangler's local dev server default port is 8787
        target: 'http://localhost:8787',
        changeOrigin: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});