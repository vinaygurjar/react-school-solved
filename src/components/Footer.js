import React from 'react'
import { bx_map, bx_phone, carbon_send, facebook, instagram, twitter } from '../images'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <p className='info'>Company Info</p>
                <div className='about'>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
                </div>
            </div>
            <div>
                <p className='info'>Legal</p>
                <div className='about'>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
                </div>
            </div>
            <div>
                <p className='info'>Features</p>
                <div className='about'>
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
                </div>
            </div>
            <div>
                <p className='info'>Resources</p>
                <div className='about'>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
                </div>
            </div>
            <div>
                <p className='info'>Get In Touch</p>
                <div className='about'>
                <p><img src={bx_phone}/>(480) 555-0103</p>
                <p><img src={bx_map}/>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p><img src={carbon_send}/>debra.holt@example.com</p>
                </div>
            </div>
        </div>

        <div className='footer_1'>
            <div>
                <p>Made With Love By Figmaland All Right Reserved </p>
            </div>
            <div  className='footer_2'>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={twitter}/>
            </div>

        </div>
    </div>
  )
}

export default Footer