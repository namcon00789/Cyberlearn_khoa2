import React, { Component } from 'react'
// import Child from './Child'
// import ChildFunctional from './ChildFunctional';

export default class Parent extends Component {

  state = { title: 'cyberlearn' }
  changeTitle = () => {
    this.setState({
      title:'Nam'
    })
  }
  // product = {
  //   id : 1,
  //   src : 'https://i.pinimg.com/originals/3b/bb/e0/3bbbe06ac418f29b74dd1116284c7e69.jpg',
  //   name : 'Chó husky',
  //   desc: 'cho viet nam chat luong cao',
  //   price: '3000',
  //   size: [36,37,38,39,40]
  // }
  // size =  [36,37,38,39,40]

  // showInfo = (name) => {
  //   alert(name)
  // };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        
        {/* {this.props.children} */}
        {/* <Child propSource={this.src} name={this.name}/>
        <Child propSource={this.src} name={'chó 1'}/>
        <Child propSource={this.src} name={'chó 2'}/>
        <Child propSource={this.src} name={'chó 3'}/> */}

        {/* <ChildFunctional productItem={this.product}/>   */}
        {/* <Child showAlert = {this.showInfo} productItem={this.product} shoesSize={this.size}/> */}
      </div>
    )
  }
}
