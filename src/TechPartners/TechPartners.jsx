import React from 'react'
import './techpartners.css'
import google from '../../public/google.png'
import microsoft from '../../public/microsoft.png'
import apple from '../../public/apple.png'
import meta from '../../public/meta.png'
import aws from '../../public/aws.png'
import semrush from '../../public/semrush.png'
import ahrefs from '../../public/ahrefs.png'
import looker from '../../public/looker.png'
import webflow from '../../public/webflow.png'
import figma from '../../public/figma.png'
import shopify from '../../public/shopify.png'
import zapier from '../../public/zapier.png'


const TechPartners = () => {
    const company = [
      {
        image:microsoft,
        id:1
      },
      {
        image:apple,
        id:2
        },
      {
        image:google,
        id:3
       },
      {
        image:meta,
        id:4
        },
      {
        image:aws,
        id:5
        }
    ];


     const company2 = [
      {
        image:semrush,
        id:1
      },
      {
        image:ahrefs,
        id:2
        },
      {
        image:looker,
        id:3
       },
      {
        image:meta,
        id:4
        },
      {
        image:webflow,
        id:5
      },
      {
        image:webflow,
        id:5
      },
      {
        image:figma,
        id:6
      },
      {
        image:shopify,
        id:7
      },
      {
        image:zapier,
        id:8
      },
      {
        image:semrush,
        id:1
      },
      {
        image:ahrefs,
        id:2
        },
      {
        image:looker,
        id:3
       },
      {
        image:meta,
        id:4
        },
      {
        image:webflow,
        id:5
      },
      {
        image:webflow,
        id:5
      },
      {
        image:figma,
        id:6
      },
      {
        image:shopify,
        id:7
      },
      {
        image:zapier,
        id:8
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