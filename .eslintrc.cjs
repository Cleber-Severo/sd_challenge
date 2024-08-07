module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks', 'eslint-plugin-import-helpers'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false, // Add this line
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', { 'arraysInObjects': false }],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false, 'objectsInObjects': true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-useless-escape': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
          ['/^react/', '/^redux/', '/^react-query/'],
          'module',
          '/prop-types/',
          '/^~/pages/',
          '/^~/components/',
          ['parent', 'sibling', 'index']
        ],
        'alphabetize': { 'order': 'asc', 'ignoreCase': true }
      }
    ],
  },
}
