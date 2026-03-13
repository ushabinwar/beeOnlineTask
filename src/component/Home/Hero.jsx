import React from 'react'
import './home.css'
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='container'>
            
                <h5>Your Vision, Our Expertise!</h5>
                <div>
                    <h1>Award-Winning Digital <br /> Marketing Agency for <br /> High-Growth Brands</h1>
                    <div className='box'></div>
                </div>
                <p>We help brands in speeding up their growth through strategic marketing, brand experiences that are powerful and focused on performance execution. Our solutions are designed to deliver real, measurable ROI as we build like driving traffic, improving conversions and creating digital ​‍​‌‍​‍‌​‍​‌‍​‍‌assets.</p>
                <button className='btn'>
                    Get A Free Quote <FiArrowUpRight />
                </button>
            
        </div>
    </div>
  )
}

export default Hero