module.exports = {
  // 禁止向上查找配置
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  // eslint-plugin-vue 依赖这个解析器来解析vue文件，不能改
  // https://eslint.vuejs.org/user-guide/
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 解析ts
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 配置jsx支持
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
    'plugin:vue/vue3-recommended',
    // 建议在最后，后面覆盖前面的配置
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 后面的就自由发挥了
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
}
