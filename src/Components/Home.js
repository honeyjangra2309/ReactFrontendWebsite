import React from 'react'
import '../App.css'
export default function Home() {
  return (
    <div className='container mt-5 pt-5' style={{fontFamily:"text",width:"350px",height:"100vh"}}>
        <div className="container text-center p-2 mt-5" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px"}}>

        <h3 className='text-center mt-2'>This is home page.</h3>
        <p className='text-center'>Checkout this awesome website right here.</p>
        </div>
    </div>
  )
}
