import { FlatCompat } from '@eslint/eslintrc'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unicorn from 'eslint-plugin-unicorn'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  {
    ignores: ['**/.next/**', '**/.husky/**', '**/node_modules/**', '**/public/**', '**/*.min.js']
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      unicorn: unicorn,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(?:@app/styles/globals\\.scss|(next|react)(?!\\/))$'],
            ['^(?!@(?:app|pages|widgets|features|entities|shared)).+'],
            ['^@app(\\/.*|$)'],
            ['^@pages(\\/.*|$)'],
            ['^@widgets(\\/.*|$)'],
            ['^@features(\\/.*|$)'],
            ['^@entities(\\/.*|$)'],
            ['^@shared(\\/.*|$)'],
            ['^\\.']
          ]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  }
]

export default eslintConfig
