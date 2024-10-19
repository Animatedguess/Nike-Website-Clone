// eslint.config.js
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

module.exports = [
  {
    ignores: ['dist', '.eslintrc.cjs'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      browser: true,
      es2020: true,
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-refresh': reactRefreshPlugin,
    },
    settings: {
      react: { version: '18.3.1' },
    },
    rules: {
      ...require('eslint-plugin-react').configs.recommended.rules,
      ...require('eslint-plugin-react-hooks').configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
    },
  },
];
