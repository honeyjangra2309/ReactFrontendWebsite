import React from 'react'
import twitter from '../assets/twitter.png'
import insta from '../assets/insta.png'
import facebook from '../assets/facebook.png'
import '../App.css'
export default function Contact() {
  return (
    <div className='container pt-5 mt-5' id='contact' style={{fontFamily:"text",width:"350px",height:"100vh"}}>
       <div className="container text-center p-1 mt-5" style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px"}}>
           <h5 className='my-4'>REACH US AT</h5>
            <h5 className='m-0'>support@kicksup.com</h5>
            <p className='m-0 pb-3'>for any technical support</p>
            <h5 className='m-0'>info@kicksup.com</h5>
            <p className='m-0 pb-3'>for more information</p>
            <h5 className='m-0'>feedback@kicksup.com</h5>
            <p className='m-0 pb-3'>to send your feedback</p>
            <h5 className='m-0'>jobs@kicksup.com</h5>
            <p className='m-0 pb-3'>to work with us</p>
       </div>
       <div className="container-fluid text-center my-3" style={{width:"50%"}}>
           <p>stay in touch</p>
           <div className='d-flex justify-content-around align-items-center' style={{cursor:"pointer"}}>
           <img src={twitter} alt="" />
               <img src={insta} alt="" />
               <img src={facebook} alt="" />
           </div>
       </div>
    </div>
  )
}
