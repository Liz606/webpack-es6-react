  
import React, {Component} from 'react';
import { Breadcrumb} from 'antd';
export default class FirmTable extends Component {
  state = {
  }
  componentWillMount() {
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>绩效汇总</Breadcrumb.Item>
          <Breadcrumb.Item>绩效汇总表</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>我是firm table</div>
      </div>
    );
  }
}