import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths allow the build to run from a GitHub Pages repository URL.
export default defineConfig({
  plugins: [react()],
  base: './'
});
