// Konfigurasi ESLint dalam format flat config (ESLint v8.57+ / v9).
// Digunakan untuk memeriksa kesalahan dan gaya penulisan kode JavaScript/TypeScript.
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // Aturan rekomendasi bawaan ESLint untuk JavaScript
  js.configs.recommended,
  // Aturan rekomendasi bawaan TypeScript-ESLint
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // Versi ECMAScript yang didukung
      ecmaVersion: 2022,
      // Global yang tersedia di lingkungan browser (window, document, dll.)
      globals: globals.browser,
      // Opsi parser untuk modul ES dan ECMAScript 2022
      parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
    },
    rules: {
      // Matikan aturan react/react-in-jsx-scope karena kita menggunakan react-jsx transform
      // (React tidak perlu diimpor secara manual dalam setiap file .tsx)
      'react/react-in-jsx-scope': 'off',
    },
  }
);
