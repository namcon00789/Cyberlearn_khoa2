import React from 'react'

export default function ChildFunctional(props) {

    let {src,name,price} = props.productItem;
  return (
    
        <div>
                <img style={{ width: '100px' }} src={src} alt='' />
                
                <div style={{width:'200px', marginTop:'10px'}} className="card text-left">
                    <img className="card-img-top" src={src} alt={src} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                    </div>
                </div>

            </div>

  )
}
