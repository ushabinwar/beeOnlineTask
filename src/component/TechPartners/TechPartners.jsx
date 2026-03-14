import React from 'react'
import './techpartners.css'



const TechPartners = () => {
    const company = [
      {
        image:"/microsoft.png",
        id:1
      },
      {
        image:"/apple.png",
        id:2
        },
      {
        image:"/google.png",
        id:3
       },
      {
        image:"/meta.png",
        id:4
        },
      {
        image:"/aws.png",
        id:5
        }
    ];


     const company2 = [
      {
        image:"/semrush.png",
        id:1
      },
      {
        image:"/ahrefs.png",
        id:2
        },
      {
        image:"/looker.png",
        id:3
       },
      {
        image:"meta.png",
        id:4
        },
      {
        image:"webflow.png",
        id:5
      },
      {
        image:"shopify.png",
        id:5
      },
      {
        image:"figma.png",
        id:6
      },
      {
        image:"zapier.png",
        id:7
      },
      {
        image:"/semrush.png",
        id:8
      },
      {
        image:"/ahrefs.png",
        id:9
        },
      {
        image:"/looker.png",
        id:10
       },
      {
        image:"meta.png",
        id:11
        },
      {
        image:"webflow.png",
        id:12
      },
      {
        image:"shopify.png",
        id:13
      },
      {
        image:"figma.png",
        id:14
      },
      {
        image:"zapier.png",
        id:15
      },
      
      
    ];
    
  return (
    <div className='tech-partner-container'>
        <div>
            <h1>Our <span>Technology</span> Partners</h1>
            <div className='card-container'>
                
              {company.map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt="logo" />
                </div>
              ))}

            </div>
        </div>

      <div>
            <h2>Licensed + Partnered Tools</h2>
            <div className='card-container2'>
                
              <div className='card-wrapper'>
                {company2.map((item, index) => (
                <div className="card2" key={index}>
                  <img src={item.image} alt="logo" />
                </div>
              ))}
              {company2.map((item, index) => (
                <div className="card2" key={index}>
                  <img src={item.image} alt="logo" />
                </div>
              ))}
              </div>

            </div>
        </div>


    </div>
  )
}

export default TechPartners