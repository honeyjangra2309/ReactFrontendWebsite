import React from 'react'
import StoreItem from './StoreItem'
import shoe1 from "../../assets/shoe.jpg"
import shoe2 from "../../assets/shoe2.png"
import './StoreLeftBar'
export default function StoreMiddle(props) {
  return (
    <div className='container p-3 d-flex flex-column mt-5' style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px"}}>
       <div className='d-flex justify-content-between'>
          <h5>SHOES</h5>
          <div>
          <i className="fa fa-search mr-3" style={{fontSize:"20px"}}></i>
          <button type='button' style={{border:"1px solid black",backgroundColor:"white"}}>sort by</button>
          </div>
        </div>
        <div className='my-3 d-flex justify-content-between'>
          <div className='mr-3'>
          {props.sneakersClicked && <StoreItem image={shoe1} name="KSL01" price="Rs. 2000" />}
          {props.sneakersClicked && <StoreItem image={shoe1} name="KSL01" price="Rs. 2000"/>}
          </div>
          <div className='mr-3'>
          {props.loafersClicked && <StoreItem image={shoe2} name="KSW01" price="Rs. 2500"/>}
          {props.loafersClicked && <StoreItem image={shoe2} name="KSW01" price="Rs. 2500"/>}
          </div>
          <div>
          {props.sneakersClicked &&  <StoreItem image={shoe1} name="ROYAL S 01" price="Rs. 6000"/>}
          {props.sneakersClicked &&  <StoreItem image={shoe1} name="ROYAL S 01" price="Rs. 6000"/>}
          </div>
        </div>
    </div>
  )
}
