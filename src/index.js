import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './container/index';
import LayoutPage from './container/main/layout';
import MainPage from './container/main/index';
import LoginPage from './container/login';
import NoPage from './container/noPage';

render(
    <Router>
        <Switch>
            {/* 去首页 */}
            <Route exact path="/" component={IndexPage} /> 
            {/* 去系统主页 */}
            <Route path="/main" component={LayoutPage} /> 
            {/* 去登录 */}
            <Route path="/login" component={LoginPage} />
            {/* 去404 */}
            <Route path="*" component={NoPage} />
        </Switch>
    </Router>,
    document.getElementById('root')
);