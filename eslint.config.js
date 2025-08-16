import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['**/mongosh-crud-operations'] },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js, '@stylistic': stylistic },
    extends: ['js/recommended', stylistic.configs.recommended],
    rules: {
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/indent': ['error', 2, { offsetTernaryExpressions: false }],
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
      'no-unused-vars': 'warn'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node }
  }
]);
