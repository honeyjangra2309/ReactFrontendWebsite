import React from 'react'
import '../../App.css'
export default function StoreItem(props) {
  
  return (
    <div className='d-flex flex-column' style={{fontFamily:"text"}}>
        <img src={props.image} alt="" style={{maxWidth:"185px",height:"150px",position:"relative",backgroundColor:"#0e1111",width:"160px"}} className="img-responsive"/>
        <h5 className='mb-0 mt-2'>{props.name}</h5>
        <div className='d-flex justify-content-between'>
        <p style={{fontSize:"14px"}}>{props.price}</p>
          <div style={{fontSize:"12px"}}>
          <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
        </div>
    </div>
  )
}
