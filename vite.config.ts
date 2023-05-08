import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';
import path from 'path';

const generateAlias = (route: string) => path.resolve(__dirname, route);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigpaths()]
});
