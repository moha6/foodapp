import React from 'react'
import './Footer.css'
import { assets } from '../../assests/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
"Craving something delicious? We've got you covered! At TomatoFood, we deliver your favorite meals, fresh and fast, straight to your door. Whether you're in the mood for something healthy, hearty, or just a quick snack, explore a variety of cuisines and dishes from the best local restaurants near you."</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+254701232754</li>
                    <li>contact@tomato.com</li>

                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">© 2024 TomatoFood Delivery. All rights reserved.
        </p>
      
    </div>
  )
}

export default Footer
