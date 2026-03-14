import React from 'react'
import Hero from './Hero'
import './home.css'
import Service from '../Service/Service'
import ClientImpact from '../ClientImpact/ClientImpact'
import TechPartners from '../TechPartners/TechPartners'
import Blogs from '../Blogs/Blogs'
import Footer from '../Footer/Footer'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='main'>
        <Hero/>
        <Service/>
        <ClientImpact/>
        <TechPartners/>
        <Testimonial/>
        <Blogs/>
        <Footer/>
    </div>
  )
}

export default Home