module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'warn',
    semi: 'off',
    'comma-dangle': 'off',
    'camelcase': 'warn',
    'indent': 'off',
    'no-trailing-spaces': 'off'
  },
  settings: {
    react: {
      version: '^18.2.0'
    }
  }
}
