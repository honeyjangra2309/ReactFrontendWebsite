import React from 'react'

export default function StoreItem(props) {
  return (
    <div className='d-flex flex-column'>
        <img src={props.image} alt="" style={{width:"200px",height:"150px"}}/>
        <h5 className='mb-0 mt-2'>{props.name}</h5>
        <div className='d-flex justify-content-between'>
        <p>{props.price}</p>
          <div style={{fontSize:"12px"}}>
          <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
    </div>
  )
}
