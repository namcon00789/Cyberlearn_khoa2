import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Parent from './Parent'

export default class DemoProps extends Component {
  refParent = React.createRef();

  changeTitle = () => {
    this.refParent.current.changeTitle();
  }
  render() {

    
    return (
      <div>
        <button onClick={this.changeTitle}>Change title</button>
        <Parent ref={this.refParent}>
          <DanhSachSanPham/>
        </Parent>
      </div>
    )
  }
}
