module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    "@vue/eslint-config-typescript"
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
}
