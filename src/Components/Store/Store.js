import React from 'react'
import StoreLeftBar from './StoreLeftBar'
import '../../App.css'
import StoreMiddle from './StoreMiddle'
import StoreRightBar from './StoreRightBar'

export default function Store() {
  return (
    <div className='d-flex mb-5 mt-5 pt-5' style={{fontFamily:"text",height:"100vh"}} id="Store">
       <StoreLeftBar />
       <StoreMiddle />
       <StoreRightBar />
    </div>
  )
}
