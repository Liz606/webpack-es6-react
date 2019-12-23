import React, {Component} from 'react';
import { Breadcrumb} from 'antd';
export default class ClientNew extends Component {
  state = {
  }
  componentWillMount() {
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>人才客户汇总</Breadcrumb.Item>
          <Breadcrumb.Item>新建人才客户</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>我是Client new</div>
      </div>
    );
  }
}