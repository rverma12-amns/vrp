import React from "react";
import Logo from "../Assets/logo.png";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="AM/NS India Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><BsYoutube /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>

      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>QUALITY</span>
          <span>HELP</span>
          <span>SHARE</span>
          <span>CAREERS</span>
          <span>VENDOR REGISTRATION</span>
          <span>WORK</span>
        </div>

        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>HELLO@AMNS.COM</span>
          <span>PRESS@AMNS.COM</span>
          <span>CONTACT@AMNS.COM</span>
        </div>

        <div className="footer-section-columns">
          <span>TERMS & CONDITIONS</span>
          <span>PRIVACY POLICY</span>
          <span>COPYRIGHT © 2025 | DEVELOPED BY AM/NS INDIA PRIVATE LIMITED IT TEAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import Logo from "../Assets/logo.png";
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import "./Footer.css"; // Make sure this CSS file is included

// const Footer = () => {
//   return (
//     <footer className="footer-wrapper">
//       <div className="footer-section-one">
//         <div className="footer-logo-container">
//           <img src={Logo} alt="AM/NS India Logo" />
//         </div>
//         <div className="footer-icons">
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//             <BsTwitter />
//           </a>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <SiLinkedin />
//           </a>
//           <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//             <BsYoutube />
//           </a>
//           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//             <FaFacebookF />
//           </a>
//         </div>
//       </div>

//       <div className="footer-section-two">
//         <div className="footer-section-columns">
//           <span>Quality</span>
//           <span>Help</span>
//           <span>Share</span>
//           <span>Careers</span>
//           <span>VendorRegistration</span>
//           <span>Work</span>
//         </div>

//         <div className="footer-section-columns">
//           <span>244-5333-7783</span>
//           <span>hello@amns.com</span>
//           <span>press@amns.com</span>
//           <span>contact@amns.com</span>
//         </div>

//         <div className="footer-section-columns">
//           <span>Terms & Conditions</span>
//           <span>Privacy Policy</span>
//           <span> Copyright © 2025 Portal developed & maintained by ArcelorMittal Nippon Steel India Private Limited IT Team
//     </span>


//              </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import "./Footer.css";

// const footerLinks = [
//   {
//     title: "Company",
//     links: [
//       { label: "About Us", href: "/about-us" },
//       { label: "Leadership", href: "/leadership" },
//       { label: "Locations", href: "/locations" }
//     ]
//   },
//   {
//     title: "Portfolio",
//     links: [
//       { label: "Applications", href: "/applications" },
//       { label: "Marquee Projects", href: "/marquee-projects" },
//       { label: "Steel Making Process", href: "/steel-making-process" }
//     ]
//   },
//   {
//     title: "People",
//     links: [
//       { label: "She Makes Steel Smarter", href: "/she-makes-steel-smarter" },
//       { label: "Vision 2030", href: "/vision-2030" },
//       { label: "Careers", href: "/careers" }
//     ]
//   },
//   {
//     title: "Society",
//     links: [
//       { label: "Brighter Futures", href: "/brighter-futures" }
//     ]
//   },
//   {
//     title: "Newsroom",
//     links: [
//       { label: "Press Releases", href: "/press-releases" }
//     ]
//   },
//   {
//     title: "Stories",
//     links: [
//       { label: "AM/NS Stories", href: "/blogs" }
//     ]
//   },
//   {
//     title: "Miscellaneous",
//     links: [
//       { label: "Contact Us", href: "/contact-us" },
//       { label: "Disclaimer", href: "/disclaimer" },
//       { label: "Statutory Documentation", href: "/statutory-documentation" },
//       { label: "POLICIES", href: "/policies" },
//       { label: "2025 - © AM/NS INDIA", href: "#" }
//     ]
//   }
// ];

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-links-wrapper">
//         {footerLinks.map((section, idx) => (
//           <div className="footer-nav" key={idx}>
//             <h4>{section.title}</h4>
//             <ul role="list">
//               {section.links.map((link, index) => (
//                 <li
//                   key={index}
//                   data-aos="fade-up"
//                   data-aos-duration="400"
//                   data-aos-delay="150"
//                   data-aos-easing="ease-out"
//                 >
//                   <a href={link.href} target="_self">
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
