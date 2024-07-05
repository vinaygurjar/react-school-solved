import React from 'react'
import image1 from '../images/school-solved_1.png';
import image10 from '../images/image10.png';
import image2 from '../images/image2.png';
import image5 from '../images/image5.png';
import col_md_6 from '../images/col_md_6.png';
import product_cover_133 from '../images/product_cover_133.png';
import product_cover_131 from '../images/product_cover_131.png';
import product_cover_130 from '../images/product_cover_130.png';
import product_cover_132 from '../images/product_cover_132.png';
import { Frame4, Framesec, basket, cool_icon, desktop_screen, fixed_height, flask, like, like1 } from '../images';
import tecnology1 from '../images/technology1.png';

const MainSection = () => {
  return (
    <div>
        <div className='mainclass'>
      <div className='rectangle_1'>
        <div className='content'>
        <p className='para1'>Online training</p>
        <h1>25K+ STUDENTS<br/> 
        TRUST US</h1>
        <p className='para2'>Our goal is to make online education work<br/>
         for everyone</p>
         <a className="btn" href="#">Get Quote Now</a>
         <a className="button" href="#">Learn More</a>
        </div>
      <div className='image'>
          <img src={image1}></img>
      </div>
      </div>
      
      </div>
    <div className='squares'>
      <div className='rectangle_2'>
      <div className='svg_1'>
      <img src={desktop_screen}/>
<p className='para3'>Certified Teacher</p>
<p className='para4'>The gradual accumulation of<br/> 
information about atomic and<br/> 
small-scale behaviour...</p>
<svg width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="2" fill="#E74040"/>
</svg>
      </div>
      </div>
      <div className='rectangle_3'>
      <div className='svg_2'>
      <img src={cool_icon}/>
<p className='para5'>2,769 online courses	</p>
<svg className='line' width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="2" fill="#E74040"/>
</svg>
<p className='para6'>The gradual accumulation of<br/> 
information about atomic and<br/> 
small-scale behaviour...</p>
      </div>
      </div>
      <div className='rectangle_4'>
      <div className='svg_3'>
      <img src={flask}/>
<p className='para7'>2,769 online courses	</p>
<svg className='line1' width="50" height="2" viewBox="0 0 50 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="2" fill="#E74040"/>
</svg>
<p className='para8'>The gradual accumulation of<br/> 
information about atomic and<br/> 
small-scale behaviour...</p>
      </div> 
      </div>
    </div> 
    <div className='package'>
      <div className='rectangle_5'>
      <img src={tecnology1}/>
<img className='image10' src={image10} />
<img className='image2' src={image2} />
<img className='image5' src={image5} />

      </div>
      <div className='approve'>
      <div className='line2'>
        <img src={fixed_height}/>
      </div>
<p className='para9'>Approdable <br/> 
Packages</p>
<p className='para10'>Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics:<br/> 
Newtonian mechanics </p>
<a className="btn" href="#">Learn More <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02336 6.24222L7.12275 5.14283C7.25313 5.01245 7.25313 4.80106 7.12275 4.67068L6.02336 3.57129M7.02496 4.90676L2.35083 4.90676" stroke="#4CAF4F" stroke-width="0.5008" stroke-linecap="round"/>
</svg> </a>
      </div>
    </div>
    <div className='played'>
    <div className='approved'>
    <div className='line3'>
        <img src={fixed_height}/>
      </div>
<p className='para11'>Approdable Packages</p>
<p className='para12'>Problems trying to resolve the conflict between<br/> 
the two major realms of Classical physics:<br/> 
Newtonian mechanics </p>
<a className="btn" href="#">Learn More <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02336 6.24222L7.12275 5.14283C7.25313 5.01245 7.25313 4.80106 7.12275 4.67068L6.02336 3.57129M7.02496 4.90676L2.35083 4.90676" stroke="#4CAF4F" stroke-width="0.5008" stroke-linecap="round"/>
</svg> </a>
  </div>    
  <div>
    <img className='image4' src={col_md_6} />
  </div>
    </div>
  <div className='course'>
    <p className='para13'>Courses</p>
    <p className='para14'>Video in Live Action</p>
    <p className='para15'>Problems trying to resolve the conflict between <br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
  </div>
  <div className='mainpic'>
    {
      data.map((item, index) => {
        return (
          <div className='card' key={index}>
          <img src={item.image} alt='image'/>
          <a className="button" href="#">Sale</a>
          <div className='circle'>
            <img src={like}/>
            <img src={basket}/>
            <img src={like1}/>
          </div>
          <p className='para16'>{item.title}<img src={Frame4}/></p>
          <p className='para17'>{item.topic}</p>
          <p className='para18'>{item.description}</p>
    <p className='para19'><img src={Framesec}/>{item.sales}</p>
    <p className='para20'>{item.amount}<span>{item.amount2}</span></p>
    <a className="btn" href="#"> Learn More <svg width="25" height="25" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.02336 6.24222L7.12275 5.14283C7.25313 5.01245 7.25313 4.80106 7.12275 4.67068L6.02336 3.57129M7.02496 4.90676L2.35083 4.90676" stroke="#4CAF4F" stroke-width="0.5008" stroke-linecap="round"/>
    </svg> </a>
        </div>
        )
      })
    }
   
  </div>
    </div>
  )
}

export default MainSection

const data = [
  {
    id : 1,
    image : product_cover_133,
    title : "Expert instruction",
    topic : 'Every Client Matters',
    description : 'We focus on ergonomics and meeting you....',
    sales:'15 sales',
    amount : '$6.48',
    amount2 : '$16.48'
  },
  {
    id : 2,
    image : product_cover_131,
    title : "Books Liberary",
    topic : 'Approdable Packages',
    description : 'We focus on ergonomics and meeting you....',
    sales:'15 sales',
    amount : '$16.48',
    amount2 : "$6.48"
  },
  {
    id : 3,
    image : product_cover_130,
    title : "Lifetime access",
    topic : 'Watch our Courses',
    description : 'We focus on ergonomics and meeting you....',
    sales:'15 sales',
    amount : '$16.48',
    amount2 : '$6.48'
  },
  {
    id : 4,
    image : product_cover_132,
    title : "Books Liberary",
    topic : 'Our Popular Courses',
    description : 'We focus on ergonomics and meeting you....',
    sales:'15 sales',
    amount : '$16.48',
    amount2 : '$6.48'
  },
]
