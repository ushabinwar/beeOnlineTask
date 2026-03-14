import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Navbar/Nav'
import Home from './component/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Service from './component/Service/Service'
import Blogs from './component/Blogs/Blogs'
import ClientImpact from './component/ClientImpact/ClientImpact'
import Testimonial from './component/Testimonial/Testimonial'
import TechPartners from './component/TechPartners/TechPartners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<ClientImpact/>} />
        <Route path="/blogs" element={< Blogs/>} />
        <Route path="/security" element={< Testimonial/>} />
        <Route path="/career" element={< TechPartners/>} />
    </Routes>
    </>
  )
}

export default App
