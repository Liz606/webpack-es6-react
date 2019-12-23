import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './container/index';
import LayoutPage from './container/main/layout';
import LoginPage from './container/login';
import NoPage from './container/noPage';

ReactDOM.render(
  <Router>
    <Switch>
      {/* 去系统主页 */}
      <Route path="/main" component={LayoutPage} />
      {/* 去登录 */}
      <Route exact path="/login" component={LoginPage} />
      {/* 去首页 */}
      <Route exact path="/index" component={IndexPage} />
      {/* 去404 */}
      <Route path="*" component={NoPage} />
    </Switch>
  </Router>
  , document.getElementById('root'));