import React from 'react';

class LayoutPage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}, 我是Layout。
        </div>
      );
    }
  }

  export default LayoutPage; 