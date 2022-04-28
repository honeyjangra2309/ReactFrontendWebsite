import React from 'react'
import brand from '../assets/websitelogo.png'
import '../App.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const navlinkstyles =({isActive}) => {
    return {
       borderBottom: isActive? "2px solid black" :"none"
    }
  }
  const scrollToStore=() => {
    const aboutUs=document.querySelector("#Store");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToContact=() => {
    const aboutUs=document.querySelector("#contact");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToJourney=() => {
    const aboutUs=document.querySelector("#Journey");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  const scrollToTeam=() => {
    const aboutUs=document.querySelector("#Team");
    aboutUs.scrollIntoView({behavior:'smooth',block:"start"});
  }
  return (
    <div>
        <div className="container d-flex justify-content-between m-3" style={{fontFamily:"text",position:"fixed",top:"0"}}>
            <div>
               <img src={brand} alt="" style={{width:'50px'}}/>
            </div>
            <div>
               <ul className='d-flex justify-content-between list-unstyled my-3' style={{cursor:"pointer"}}>
                   <NavLink className='m-2 main-nav' to="/home" style={navlinkstyles} >HOME</NavLink>
                   <NavLink className='m-2 main-nav' to="/Journey"  style={navlinkstyles}  onClick={scrollToJourney}>THE JOURNEY</NavLink>
                   <NavLink className='m-2 main-nav' to="/Team"  style={navlinkstyles} onClick={scrollToTeam}>TEAM</NavLink>
                   <NavLink className='m-2 main-nav' to="/Store" style={navlinkstyles} onClick={scrollToStore}>STORE</NavLink>
                   <NavLink className='m-2 main-nav' to="/contact" style={navlinkstyles} onClick={scrollToContact}>CONTACT</NavLink>
               </ul>
            </div>
            <div className='my-4'>
            <i className="fa fa-user mr-2" aria-hidden="true"></i> 
               GAGAN
            </div>
        </div>
    </div>
  )
}
