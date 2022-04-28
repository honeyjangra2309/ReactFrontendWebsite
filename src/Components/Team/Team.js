import React from 'react'
import '../../App.css'
import TeamCard from './TeamCard'
import zidane from "../../assets/zidane.jpg"
import tonikroos from "../../assets/tonikroos.jpg"
import ikercasillas from "../../assets/ikercasillas.jpg"
import james from "../../assets/james.jpg"
import cristiano from "../../assets/christiano.jpg"

export default function () {
  return (
    <div className='container d-flex flex-column mt-5 pt-5' style={{fontFamily:"text",height:"100vh",width:"100vw"}} id="Team">
      <h4 className='text-center my-5'>without bonding and coordination,every project is a failure.Look at who makes KICKSUP great. :)</h4>
       <div className="d-flex">
        <TeamCard name="Zidane" image={zidane} post="Leadership management"/>
        <TeamCard name="Toni Kroos" image={tonikroos} post="Product Developer"/>
        <TeamCard  name="Iker Casillas" image={ikercasillas} post="Marketing Strategy" />
        <TeamCard  name="James" image={james} post="Product Designer" />
        <TeamCard  name="Cristiano" image={cristiano} post="Financial Operations" />
       </div>
       <h4 className='text-center my-4'>and you. :)</h4>
    </div>
  )
}
