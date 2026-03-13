import React from "react";
import "./clientimpact.css";
import yellowLine from '../../../public/yellowLine.PNG'
import graph from "../../../public/graph.jpg"
import meet from "../../../public/meet.jpg"
import costAnalysis from "../../../public/costAnalysis.jpg"
import disc from "../../../public/disc.jpg"


const clients = [
  {
    title: "Traffic Growth",
    image: graph
  },
  {
    title: "Lead Quality",
    image: costAnalysis
  },
  {
    title: "Cost Per Acquisition",
    image: disc
  },
  {
    title: "Conversion Rate",
    image: meet
  },
  {
    title: "Traffic Growth",
    image: graph
  },
  {
    title: "Lead Quality",
    image: costAnalysis
  },
  {
    title: "Cost Per Acquisition",
    image: disc
  },
  // {
  //   title: "Conversion Rate",
  //   image: meet
  // },
  
];

const ClientImpact = () => {
  return (
    <section className="clients">
      <div className="clients-container">

         <div className="heading">
                    <h2>Impact On Clients</h2>
                    <img className="underline" src={yellowLine} alt="" />
          </div>
        <p className="tagline">
          Your Growth. Your KPIs. Our Commitment.
        </p>


        <div className="client-grid">
          {clients.map((item, index) => (
            <div className="client-card" key={index}>
              <div className="top">
                <img src={item.image} alt="" />
              </div>
              <div className="circle"></div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientImpact;