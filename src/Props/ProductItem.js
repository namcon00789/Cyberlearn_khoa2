import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card text-left" style={{width:'300px'}}>
          <img className="card-img-top" src={this.props.dataProductItem.image} alt={this.props.dataProductItem.image} />
          <div className="card-body">
            <h4 className="card-title">{this.props.dataProductItem.name}</h4>
            <p className="card-text">{this.props.dataProductItem.price}</p>
            <button className='btn btn-dark text-white'>View detail</button>
          </div>
        </div>
    )
  }
}
