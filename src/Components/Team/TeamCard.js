import React from 'react'
import medium from '../../assets/medium.png'
import linkedin from '../../assets/linkedin.png'
import facebook from '../../assets/facebook.png'

export default function TeamCard(props) {
  return (
    <div className='container'>
        <div className="card"  style={{width:"150px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
       <img className="card-img-top" src={props.image} alt="Card cap" style={{width:"150px",height:"150px"}}/>
        <div className="card-body">
            <h5 className="card-title m-0">{props.name}</h5>
            <p className="card-text m-0">{props.post}</p>
        </div>
        <div className="card-body">
               <img src={linkedin} alt="" style={{width:"30px"}} className="mr-2"/>
                <img src={medium} alt=""  style={{width:"30px"}} className="mr-2"/>
               <img src={facebook} alt=""  style={{width:"30px"}}/>
        </div>
</div>

    </div>
  )
}
