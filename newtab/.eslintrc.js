module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue-libs/recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  'overrides': [{
    'files': ['*.ts', '*.vue'],
    'rules': {
      // bug workaround: used types are reported as unused
      'no-unused-vars': 'off'
    }
  }],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
