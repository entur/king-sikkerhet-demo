import prettier from 'eslint-plugin-prettier'
import typescript from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'
import react from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'

export default typescript.config(
  js.configs.recommended,
  react.configs.flat['jsx-runtime'],
  ...typescript.configs.recommended,
  {
    ignores: ['build/*', 'public/*', 'src/react-app-env.d.ts', 'src/serviceWorker.js'],
  },
  {
    plugins: {
      prettier,
      stylisticJs,
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'prettier/prettier': ['error'],
      'object-curly-spacing': ['warn', 'always'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
    },
  }
)
