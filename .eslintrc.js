module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-mixed-requires': 'off',
    'no-mixed-spaces-and-tabs': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
