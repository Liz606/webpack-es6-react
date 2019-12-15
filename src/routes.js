

import IndexPage from './container/index';
import LayoutPage from './container/main/layout';
import LoginPage from './container/login';
import NoPagePage from './container/noPage';

export const routes = {
  path: '/',
  component: IndexPage,
  childRoutes: [
    { path: 'about', component: LayoutPage },
    { path: 'login', component: LoginPage },
  ]
}