import React from 'react'
import "../Plan/Plan.css"
import {plansData} from '../../data/plansData.js';
import whiteTick from '../../assets/whiteTick.png'

const Plan = () => {
  return (
<div className="plan-container">
    <div className="programs-header">
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
    </div>

    {/* plan cards */}
<div className="plans">
    {plansData.map((plan,i)=>
        <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> ${plan.price}</span>
        <div className="features">
            {plan.features.map((feature,index)=>
                <div className="feature"  key={index}>
                    <img src={whiteTick} alt="" />
                    <span>{feature}</span>
                </div>
            )}
        </div>
        <div>
            <span>See more benefits → </span>
        </div>
        <button className='btn'>Join now</button>
        </div>
    )}
    </div>

</div>  
)
}
 
export default Plan