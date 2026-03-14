// 


import React, { useState } from 'react'
import beeonline from "../../../public/beeonline.png"
import { Link } from 'react-router-dom'
import "./nav.css"
import { CiMenuFries } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)

  const services = [
    {
      titile:"SEO",
      svg: "./Frame 468.png"
    },
    {
      titile:"Content Marketing",
      svg: "./market.png"
    },
    {
      titile:"UI/UX Design",
      svg: "/Frame 473.png"
    },
    {
      titile:"Mobile App Development",
      svg: "/Frame 472.png"
    },
    {
      titile:"Web Development",
      svg: "/Frame 473.png"
    },
    {
      titile:"Creative Brand Design",
      svg: "/Frame 474.png"
    },
    {
      titile:"Social Media Marketing ",
      svg: "/Frame 472.png"
    },
    {
      titile:"Performance Marketing",
      svg: "/Frame 473.png"
    },
    {
      titile:"Website Maintenance",
      svg: "/Frame 474.png"
    }
  ]

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={beeonline} alt="logo" />
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <CiMenuFries />
      </div>

      <div  className={`link ${menuOpen ? "active" : ""}`}>

        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/">Home</Link>

        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/about">About Us</Link>


        {/* SERVICE DROPDOWN */}

        <div 
          className="service-dropdown"
          onMouseEnter={()=>setServiceOpen(true)}
          onMouseLeave={()=>setServiceOpen(false)}
        >

          <Link onClick={()=>{ setServiceOpen(!serviceOpen)}} className='elem' to="/service">Service</Link>

          {serviceOpen && (
            <div className="service-menu">

              

              {services.map((service, index) => (
  <Link
   
    
  >
    <div className='service-link'>
     {/* <div className='image-box'> <img src={service.svg}  /></div> */}
      {service.titile}
    </div>
  </Link>
))}

             

            </div>
          )}

        </div>


        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/security">Cyber Security</Link>

        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/career">Career</Link>

        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/blogs">Blog</Link>

        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/contact">Contact</Link>

      </div>

      <button className='btn'>Contact Us</button>

    </nav>
  )
}

export default Nav