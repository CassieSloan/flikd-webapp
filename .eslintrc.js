module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@next/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsdoc/recommended',
    "next/core-web-vitals"
  ],
  plugins: ['@next', '@typescript-eslint', 'prettier', 'jsdoc', 'import'],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  rules: {
    // typescript
    'typescript-eslint/no-empty-function': 'off',
    'typescript-eslint/explicit-function-return-type': 'off',
    'typescript-eslint/camelcase': 'off',
    'typescript-eslint/no-use-before-define': 'off',
    'typescript-eslint/explicit-module-boundary-types': 'off',
    // code style
    'prettier/prettier': 'warn',
    'eol-last': ["error", "always"],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'no-case-declarations': 'off',
    'no-irregular-whitespace': 'error',
    'no-fallthrough': 'warn',
    'prefer-rest-params': 'warn',
    'no-useless-escape': 'warn',
    'eqeqeq': 'error',
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    // jsdoc
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
        },
        publicOnly: {
          esm: true,
          cjs: true,
          window: true,
        },
      },
    ],
    'jsdoc/require-param': 'off', // typescript handles this
    'jsdoc/require-param-type': 'off', // typescript handles this
    'jsdoc/require-returns': 'off', // typescript handles this
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    // imports
    'import/namespace': ['error', { allowComputed: true }],
    'import/named': 'error',
    'import/default': 'error',
    'import/no-named-as-default': 'error',
    'no-restricted-imports': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    // sort
    'sort/export-members': 'warn',
    'sort/imports': 'warn',
    'sort/import-members': 'warn',
    'sort/object-properties': 'warn',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['./tsconfig.json'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
