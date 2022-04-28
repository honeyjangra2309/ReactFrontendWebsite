import React from 'react'
import grass from "../assets/grasspic.jpg"
import '../App.css'
import '../Components/Journey.css'
export default function Journey() {
  return (
    <div className='container mt-5 pt-5' style={{fontFamily:"text"}} id="Journey">
        <div className="container d-flex align-items-center justify-content-center" style={{background:`url(${grass})`,height:"50vh",backgroundRepeat:"none", backgroundSize:"100% 100%"}}>
            <h1 className='text-white'>THE JOURNEY</h1>
        </div>
        <div className="container bg-dark">
        <div class="timeline-wrapper text-white">
        <div class="node">
            <h5 className='pt-2 mb-0'>THE ROOTS</h5>
            <p>Our entire life when we shop,we are limited by choices that are there in the store.We are often on the side where we buy our favourite coloured shoes made by someone else but what if we designed it?
                what if we could involve in the marketing of the shoe we want to buy?This little thought sprouted to become what we are today
                .KICKSUP!:)
            </p>
        </div>
        <div class="node">
            <h5 className='mb-0'>CHAPTER <span>&#8544;</span></h5>
            <p>Understanding the trends in the country and what the users think when they buy what if we could involve in the marketing of the shoe we want to buy?This little thought sprouted to become what we are today
                .We are heading into the era of technology and people prefer online shopping to shopping in an outlet.</p>
        </div>
        <div class="node">
            <h5 className='mb-0'>CHAPTER <span>&#8544;</span>&#8544;</h5>
            <p>Every milestone begins with a single step and before KICKSUP sprouted,the team manufactured in small scale with two users a month.The positive reviews and support from people
                motivated us to push our limits further.
            </p>
        </div>
        <div class="node">
            <h5 className='mb-0'>KICKSUP</h5>
            <p>Here we are,made a perfect platform for you to involve in the making of a shoe you want to buy!We have evolved ever since we started out.We wish to help you more
                and make KICKSUP a bigger team.Design your shoe and be a part of our journey.
            </p>
        </div>
        
        </div>
        </div>
    </div>
  )
}
