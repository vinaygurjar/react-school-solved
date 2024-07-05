import React from 'react'
import { stars } from '../images';
import testimonial from '../images/testimonial.png';
import testimonial2 from '../images/testimonial2.png';


const Testimonials = () => {
  return (
    <div>
        <div className='test'>
  <p className='monial'>Testimonials</p>
  <p className='popular'>Our Popular Courses</p>
  <p className='try'>Problems trying to resolve the conflict between <br/>
the two major realms of Classical physics: Newtonian mechanics </p>
</div>

<div className='testimonial'>
  <div>
    <div className='image6'>
    <img src={testimonial}/>
    </div>
    <p className='slate'>Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year.</p>
<img src={stars}/>
<p className='miles'>Regina Miles</p>
<p className='design'>Designer</p>
  </div>
  <div>
    <div className='image6'>
    <img src={testimonial2}/>
    </div>
    <p className='slate'>Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year.</p>
<img src={stars}/>
<p className='miles'>Regina Miles</p>
<p className='design'>Designer</p>
  </div>
</div>
    </div>
  )
}

export default Testimonials