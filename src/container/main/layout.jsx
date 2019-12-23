import React from 'react';
import { Layout, Menu, Avatar, Icon, Dropdown } from 'antd';
import { Link, HashRouter as Router,Route, Switch} from 'react-router-dom';
import { createHashHistory } from 'history';
import './style.scss';

import ClientsTable from './clients/table';
import ClientsNew from './clients/new';
import FirmsTable from './firms/table';
import FirmsNew from './firms/new';
import AccountTable from './account/table';
import AccountNew from './account/new';


const history = createHashHistory();
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class LayoutPage extends React.Component {
  state = {
    collapsed: false,
    user: 'Liz',
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={'/main/personal'}>个人中心</Link>
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.handleLoginOut}>退出</div>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo"> CRM </div>
          <Menu theme="dark" defaultSelectedKeys={['person']} defaultOpenKeys={['table']} mode="inline">
            <SubMenu
              key="person"
              title={
                <span>
                  <Icon type="user" />
                  <span>人才客户</span>
                </span>
              }
            >
              <Menu.Item key="clientsTable"><Link to={'/main/clients/table'}>人才客户汇总表</Link></Menu.Item>
              <Menu.Item key="clientsNew"><Link to={'/main/clients/new'}>新建人才客户</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="firms"
              title={
                <span>
                  <Icon type="team" />
                  <span>企业客户</span>
                </span>
              }
            >
              <Menu.Item key="firmsTable"><Link to={'/main/firms/table'}>企业客户表汇总表</Link></Menu.Item>
              <Menu.Item key="firmsNew"><Link to={'/main/firms/new'}>新建企业客户</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="account"
              title={
                <span>
                  <Icon type="area-chart" />
                  <span>绩效汇总</span>
                </span>
              }
            >
              <Menu.Item key="accountTable"><Link to={'/main/account/table'}>绩效汇总表</Link></Menu.Item>
              <Menu.Item key="accountNew"><Link to={'/main/account/new'}>添加新成交</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="contentWrap">
          <Header>
            <Dropdown overlay={menu}>
              <Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large">
                {this.state.user}
              </Avatar>
            </Dropdown>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Router>
              <Switch>
                <Route exact path='/main/clients/table' component={ClientsTable} />
                <Route exact path='/main/clients/new' component={ClientsNew} />
                <Route exact path='/main/firms/table' component={FirmsTable} />
                <Route exact path='/main/firms/new' component={FirmsNew} />
                <Route exact path='/main/account/table' component={AccountTable} />
                <Route exact path='/main/account/new' component={AccountNew} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage; 