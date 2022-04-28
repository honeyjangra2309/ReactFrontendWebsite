import React from 'react'
import grass from "../assets/grasspic.jpg"
import '../App.css'
import '../Components/Journey.css'

export default function Journey() {
  return (
    <div className='container mt-5 pt-5 d-flex flex-column' style={{fontFamily:"text"}} id="Journey">
        <div className="container d-flex align-items-center justify-content-center mt-5 mb-0" style={{background:`url(${grass})`,height:"50vh",backgroundRepeat:"none", backgroundSize:"100% 100%"}}>
            <h1 className='text-white'>THE JOURNEY</h1>
        </div>
        <div className="container bg-dark mt-0">
		  <div className='mt-0'>
        	<ul className="timeline">
				<li>
					<a target="_blank" href="https://www.totoprayogo.com/#" className='pt-3'>THE ROOTS</a>
					<p>Our entire life when we shop,we are limited by choices that are there in the store.We are often on the side where we buy our favourite coloured shoes made by someone else but what if we designed it?
                what if we could involve in the marketing of the shoe we want to buy?This little thought sprouted to become what we are today
                .KICKSUP!:)</p>
				</li>
				<li>
					<a href="#">CHAPTER <span>&#8544;</span></a>
					<p>Understanding the trends in the country and what the users think when they buy what if we could involve in the marketing of the shoe we want to buy?This little thought sprouted to become what we are today
                .We are heading into the era of technology and people prefer online shopping to shopping in an outlet.</p>
				</li>
				<li>
					<a href="#">CHAPTER <span>&#8544;</span>&#8544;</a>
					<p>Every milestone begins with a single step and before KICKSUP sprouted,the team manufactured in small scale with two users a month.The positive reviews and support from people
                motivated us to push our limits further.</p>
				</li>
                <li>
					<a href="#">KICKSUP</a>
					<p>Here we are,made a perfect platform for you to involve in the making of a shoe you want to buy!We have evolved ever since we started out.We wish to help you more
                and make KICKSUP a bigger team.Design your shoe and be a part of our journey.</p>
				</li>
			</ul>
		</div>
        </div> 
    </div>
  )
}
