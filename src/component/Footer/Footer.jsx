// import React from "react";
// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="footer-container">

//         {/* About Section */}
//         <div className="footer-about">
//           <h2 className="logo">BeeOnline</h2>
//           <p>
//             Bee Online takes pride in being a valued partner, providing
//             customized solutions designed to help you drive revenue
//             and reach your goals.
//           </p>

//           <div className="social-icons">
//             <span>in</span>
//             <span>◎</span>
//             <span>𝕏</span>
//             <span>✈</span>
//             <span>f</span>
//           </div>
//         </div>

//         {/* Company */}
//         <div className="footer-links">
//           <h3>Company</h3>
//           <a href="#">About Us</a>
//           <a href="#">Services</a>
//           <a href="#">Blog</a>
//         </div>

//         {/* Support */}
//         <div className="footer-links">
//           <h3>Support</h3>
//           <a href="#">Contact Us</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms Conditions</a>
//         </div>

//         {/* Subscribe */}
//         <div className="footer-subscribe">
//           <h3>Subscribe Now</h3>

//           <div className="subscribe-box">
//             <input type="email" placeholder="Enter email address" />
//             <button>→</button>
//           </div>

//           <p className="subscribe-note">
//             By signing up, you agree to receive mail
//           </p>
//         </div>

//       </div>

//       {/* Bottom */}
//       <div className="footer-bottom">
//         <p>© Copyright 2024 Beeonline</p>
//         <p>
//           103, Quantum Tower, Off Swami Vivekanand Rd,
//           Malad West, Mumbai, Maharashtra 400064
//         </p>
//       </div>

//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./footer.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoThumbsUpOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-wrapper">

      {/* Yellow Floating CTA */}
      <div className="cta-box">
        <h2>Do you want truly impressive results?</h2>

        <p>
          Ready to elevate your online presence? Get in touch with us today
          for personalized solutions tailored to your business needs.
        </p>

        <div className="cta-features">
          <span> <BsFillPatchCheckFill /> 60+ Team Members</span>
          <span><RiMoneyDollarCircleFill /> Affordable Pricing Plan</span>
          <span><IoThumbsUpOutline /> Growth Oriented Strategies</span>
        </div>

        <button className="cta-btn">Book a Free Consultation</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-about">
            <h2 className="logo">BeeOnline</h2>

            <p>
              Bee Online takes pride in being a valued partner,
              providing customized solutions designed to help
              you drive revenue and reach your goals.
            </p>

            <div className="social-icons">
              <span>in</span>
              <span>◎</span>
              <span>𝕏</span>
              <span>✈</span>
              <span>f</span>
            </div>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-links">
            <h3>Support</h3>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Conditions</a>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe Now</h3>

            <div className="subscribe-box">
              <input type="email" placeholder="Enter email address" />
              <button>→</button>
            </div>

            <p className="subscribe-note">
              By signing up, you agree to receive mail
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© Copyright 2024 Beeonline</p>
          <p>
            103, Quantum Tower, Off Swami Vivekanand Rd,
            Malad West, Mumbai, Maharashtra 400064
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Footer;