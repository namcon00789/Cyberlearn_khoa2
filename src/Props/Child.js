import React, { Component } from 'react'

export default class Child extends Component {

    renderSize = () => {
        let {size} = this.props.productItem;
        return size.map((number, index) => {
            return <button key={index}>{number}</button>
        })
    }
    render() { 

        let {src,name,price,desc} = this.props.productItem;
        let {shoesSize} = this.props;
        return (
            <div>
                <img style={{ width: '100px' }} src={src} alt='' />
                
                <div style={{width:'200px', marginTop:'10px'}} className="card text-left">
                    <img className="card-img-top" src={src} alt={this.props.propSource} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                        {this.renderSize()}

                        {shoesSize.map((number, index) => {
                            return <button className='btn btn-success' key={index}>{number}</button>
                        })}

                        <button onClick={()=>{
                            this.props.showAlert(desc)
                        }}>Detailk</button>
                    </div>
                </div>

            </div>
        )
    }
}
