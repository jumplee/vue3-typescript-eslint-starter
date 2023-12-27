## 基础开发
先不引入eslint，只保证开发所需功能完成
1. 根据vite官网的命令
   ``yarn create vite``获取模板
2. 引入jsx支持
    ``@vitejs/plugin-vue-jsx``
3. 配置``vite.config.ts``中jsx
4. 引入sass

package.json中关键代码
```json
{
  "@vitejs/plugin-vue": "^4.5.2",
  "@vitejs/plugin-vue-jsx": "^3.1.0",
  "sass": "^1.69.5",
  "typescript": "^5.2.2",
  "vite": "^5.0.8",
  "vue-tsc": "^1.8.25"
}
```
tsconfig.json关键代码,保证jsx是不转换的，
否则就会走react逻辑

```json
{
  "jsx": "preserve"
}
```

## 引入eslint
package.json代码
```json
{
  "eslint": "^8.56.0",
  
  "eslint-plugin-vue": "^9.19.2",
  
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-prettier": "^5.1.2",
 
  "@typescript-eslint/eslint-plugin": "^6.15.0",
  "@typescript-eslint/parser": "^6.15.0",
}
```
eslint-plugin-vue 解决vue

@typescript-eslint/parser 解决ts

eslint-plugin-prettier 解决prettier和eslint冲突

eslintrc.cjs

关键是使用``parserOptions``来解析ts
```javascript
// 关键是使用parserOptions来解析ts
{
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
    }
}


```

## 配置lint-stage