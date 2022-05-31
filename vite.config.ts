import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [
    solidPlugin({
      extensions: ['.ts', '.tsx'],
      babel: {
        presets: ['patronum/babel-preset'],
        plugins: ['effector/babel-plugin'],
      },
    }),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
})
