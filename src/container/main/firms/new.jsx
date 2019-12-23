import React, {Component} from 'react';
import { Breadcrumb} from 'antd';
export default class FirmNew extends Component {
  state = {
  }
  componentWillMount() {
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>企业客户汇总</Breadcrumb.Item>
          <Breadcrumb.Item>新建企业客户</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>我是firm new</div>
      </div>
    );
  }
}