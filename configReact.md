# 安装react
```
npm i react react-dom react-router-dom
```

# 安装解析工具
```
npm i -D @babel/preset-react
```

# 修改.babelrc
```
{
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "plugins": ["@babel/transform-runtime",
    ["@babel/plugin-proposal-decorators", {"legacy": true}],
    "@babel/plugin-proposal-class-properties",
  ]
}
```

此时以及可以解析react了，因为在配置webpack时，解析js顺便就把jsx解析了。
就是这一部分
```
···
  module: {
    rules: [
      {
        //处理jsx,js
        test: /\.(jsx?)$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: evn === EVN.dev,
            sourceMap: evn === EVN.dev,
          },
        }
      },
···
```