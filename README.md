# admin-template

## 配置 eslint

- .eslintrc.js 中增加规则

```js
// 不检查console
'no-console': 'off',
// 不检查结束的,
"comma-dangle": [2, "never"],
```

## 配置 package.json 中 使用 eslint 修改代码格式

```js
"lintfix": "eslint --ext .js,.vue src --fix",
```
