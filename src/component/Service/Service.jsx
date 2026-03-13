import React from "react";
import "./service.css";
import yellowLine from '../../../public/yellowLine.PNG'
import { FiArrowUpRight } from "react-icons/fi";

const services = [
  {
    icon:"/seo.png",
    title: "SEO",
    desc: "We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization."
  },
  {
    icon:"/marketing.png",
    title: "Performance Marketing",
    desc: "Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms."
  },
  {
    icon:"/development.png",
    title: "Website Development",
    desc: "At Bee Online, we offer customised website development options that are suitable for your business needs and goals."
  },
  {
    icon:"maintenance.png",
    title: "Website Maintenance",
    desc: "We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7."
  },
  {
    icon:"design.png",
    title: "UI/UX Design",
    desc: "We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem."
  }
];

const Service = () => {
  return (
    <section className="services">
      <div className="services-container">

        

        <div className="services-grid">
          <div className="services-header">
          <div className="heading">
            <h2>What We Offer</h2>
            <img className="underline" src={yellowLine} alt="" />
          </div>
          <p>
            “Bee Online delivers tailored digital marketing, MLM strategies, website development and AI/ML-driven campaigns for your business.”
          </p>

          <button className="talk-btn">Let's Talk</button>
          </div>
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="hearder-title">
                <img src={item.icon} alt="" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.desc}</p>
              <span className="learn">Learn More <FiArrowUpRight /></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Service;