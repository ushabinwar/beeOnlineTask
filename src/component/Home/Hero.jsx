import React from 'react'
import './home.css'
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const data = [
    {
      image:"./people1.jpg",
      id:1
    },
    {
      image:"./people2.jpg",
      id:2
    },
    {
      image:"./people3.jpg",
      id:3
    }

  ]

  const scroll = [
      {
        image:"/logoipsum.png",
        id:1
      },
      {
        image:"/logoipsum.png",
        id:2
        },
      {
        image:"/logoipsum.png",
        id:3
       },
      {
        image:"/logoipsum.png",
        id:4
        },
      {
        image:"/logoipsum.png",
        id:5
      },
      {
        image:"/logoipsum.png",
        id:5
      },
      {
        image:"/logoipsum.png",
        id:6
      },
      {
        image:"/logoipsum.png",
        id:7
      },
      {
        image:"/logoipsum.png",
        id:5
      },
      
      
     
      
      
    ];


  
  return (
    <>
    <div className='hero-container'>
        <div className='container'>
            
                <h5>Your Vision, Our Expertise!</h5>
                <div className= "data">
                    <h1 className='title'>Award-Winning Digital Marketing Agency for High-Growth Brands</h1>
                    <div className='box-cont'>
                      <div className='cont'>
                        {data.map((item, index) => (
                        <div key={index} className="circl">
                          <img src={item.image} alt="icon" />
                        </div>
                      ))}</div>
                      <div className='bottom'>
                         <h5>50+</h5>
                    <h5>Awards Wining</h5>
                    <img src="/img.png" alt="" />
                      </div>

                    </div>
                   
                </div>
                <p>We help brands in speeding up their growth through strategic marketing, brand experiences that are powerful and focused on performance execution. Our solutions are designed to deliver real, measurable ROI as we build like driving traffic, improving conversions and creating digital ​‍​‌‍​‍‌​‍​‌‍​‍‌assets.</p>
                <button className='button '>
                    Get A Free Quote <FiArrowUpRight />
                </button>
            
        </div>
    </div>
   <div className='card-wrapper2'>
     {scroll.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt="logo" />
                </div>
              ))}
   </div>
              </>
  )
  
}

export default Hero