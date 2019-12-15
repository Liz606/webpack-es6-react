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

# 路由配置
安装react-router，因为这是项目依赖包，我们会在页面中使用import引入，因此使用npm install来进行安装
```
npm i react-router
```
然鹅，此时如果按照文[React Router简介](http://react-guide.github.io/react-router-cn/docs/Introduction.html)示例来写
```
import { Router, Route, Link } from 'react-router'
···
    <Router>
        <Route path="/" component={IndexPage}>
            <Route path="about" component={LayoutPage} />
            <Route path="login" component={LoginPage} />
            <Route component={NoPagePage} />
        </Route>
    </Router>
```
会出现报错，这是因为新版本react-router的版本原因。
```
The prop `history` is marked as required in `Router`, but its value is `undefined`.     in Router
```
检查package.json会发现，其实安装react-router会自动安装react-router-demo
现在对react-router的使用进行改进
```
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //给BrowserRouter起一个别名
···
const IndexPage = require('./container/index').default;
const LayoutPage = require('./container/main/layout').default;
const LoginPage = require('./container/login').default;
const NoPagePage = require('./container/noPage').default;
···
render(
    <Router>
        <Route path="/" component={IndexPage}>
            <Route path="/about" component={LayoutPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={NoPagePage} />
        </Route>
    </Router>,
    document.getElementById('root')
);
```
