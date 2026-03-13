// import React from 'react'
// import beeonline from "../../../public/beeonline.png"
// import { Link } from 'react-router-dom'
// import "./nav.css"

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src={beeonline} alt="logo" />
//       </div>

//       <div className='link'>
//         <Link className='elem' to="/">Home</Link>
//         <Link className='elem' to="/about">About Us</Link>
//         <Link className='elem' to="/about">Service</Link>
//         <Link className='elem' to="/about">Cyber Security</Link>
//         <Link className='elem' to="/about">Creer</Link>
//         <Link className='elem' to="/about">Blog</Link>
//         <Link className='elem' to="/contact">Contact</Link>

//       </div>
//       <button className='btn'>Contact Us</button>
//     </nav>
//   )
// }

// export default Nav


import React, { useState } from 'react'
import beeonline from "../../../public/beeonline.png"
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa"
import "./nav.css"
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <div className="logo">
        <img src={beeonline} alt="logo" />
      </div>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <CiMenuFries />
      </div>

      <div className={`link ${menuOpen ? "active" : ""}`}>
        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/">Home</Link>
        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/about">About Us</Link>
        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/service">Service</Link>
        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/about">Cyber Security</Link>
        <Link  onClick={()=>{setMenuOpen(false)}} className='elem' to="/about">Creer</Link>
        <Link onClick={()=>{setMenuOpen(false)}}className='elem' to="/about">Blog</Link>
        <Link onClick={()=>{setMenuOpen(false)}} className='elem' to="/contact">Contact</Link>
      </div>

      <button className='btn'>Contact Us</button>

    </nav>
  )
}

export default Nav