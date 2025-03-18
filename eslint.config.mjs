import nextPlugin from '@next/eslint-plugin-next';
import importX from 'eslint-plugin-import-x';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules', '.next', 'build'],
  },
  {
    name: 'Next Plugin',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    extends: [
      react.configs.flat['jsx-runtime'],
      ...tseslint.configs.recommended,
      importX.flatConfigs.typescript,
    ],
    files: ['**/*.{js,mjs,ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@next/next/no-duplicate-head': 'off',
      'import-x/no-duplicates': 'off',
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.{js,mjs,ts,tsx}'],
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'import-x/namespace': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        { allowSameFolder: true, prefix: '@' },
      ],
    },
  }
);
