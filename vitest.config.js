import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests.js',
    tsconfig: './tsconfig.vitest.json',
    exclude: [
      'node_modules',
      'tests/e2e/**'
    ],
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['text', 'json', 'html'],
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: './coverage',
      exclude: [
        'coverage/**',
        'dist/**',
        '**/node_modules/**',
        '**/[.]**',
        '**/*.d.ts',
        '**/__tests__/**',
        '**/*.{test,spec}.?(c|m)[jt]s?(x)',
        'tests/setupTests.js'
      ]
    }
  }
})
