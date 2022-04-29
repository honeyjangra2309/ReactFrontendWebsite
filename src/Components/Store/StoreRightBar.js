import React from 'react'
import '../../App.css'

export default function StoreRightBar() {
  return (
    <div className='container p-3 d-flex flex-column mr-5 ml-3 mt-5' style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px",fontFamily:"text"}}>
         <div className='d-flex justify-content-between'>
          <h5>CART</h5>
          <i className="fa fa-shopping-bag" style={{fontSize:"20px"}}></i>
        </div>
        <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
          <p className='text-center'>What's stopping you,designer?</p>
        </div>
        <div className='text-muted'>
        <i className="fa fa-map-marker mr-5 ml-3" style={{fontSize:"15px"}}> Home</i>
        <i className="fa fa-calendar" style={{fontSize:"15px"}}> Select Date</i>
        </div>
        <div className='text-center'>
        <button type='button' className='btn btn-sm btn-dark mt-4'>order now</button>
        </div>
    </div>
  )
}
