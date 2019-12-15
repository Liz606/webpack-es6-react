# 安装react
```
npm i react react-dom react-router-dom
``

# 安装解析工具
```
npm i -D @babel/react @babel/preset-react
```

# 修改.babelrc
```
{
  "presets": [
      "@babel/preset-env",
      "@babel/react"
  ],
  "plugins": ["@babel/transform-runtime",
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    "@babel/plugin-proposal-class-properties",
  ]
}
```