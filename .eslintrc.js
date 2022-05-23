module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ["src/**/*.ts", "src/*.ts"],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
	'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
