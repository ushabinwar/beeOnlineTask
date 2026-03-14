import React from "react";
import "./clientimpact.css";


const clients = [
  {
    title: "Traffic Growth",
    image:"/graph.jpg"
  },
  {
    title: "Lead Quality",
    image: "/costAnalysis.jpg"
  },
  {
    title: "Cost Per Acquisition",
    image: "disc.jpg"
  },
  {
    title: "Conversion Rate",
    image: "/meet.jpg"
  },
  {
    title: "Traffic Growth",
    image: "/graph.jpg"
  },
  {
    title: "Lead Quality",
    image: "/costAnalysis.jpg"
  },
  {
    title: "Cost Per Acquisition",
    image: "disc.jpg"
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
                    <img className="underline" src="../../../public/yellowLine.PNG" alt="" />
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