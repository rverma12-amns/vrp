// import React from "react";
// import BannerBackground from "../Assets/homepage.jpg";
// // import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";

// const Home = () => {
//   return (
//     <div className="home-container">
//       <Navbar />
//       <div className="home-banner-container">
//         <div className="home-bannerImage-container">
//           <img src={BannerBackground} alt="" />
//         </div>
//         <div className="home-text-section">
//           <h1 className="primary-heading">
//             Amns is Steel company
//           </h1>
//           <p className="primary-text">
//            ArcelorMittal Nippon Steel India AM/NS India is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease.
//           </p>
//           <button className="secondary-button">
//             Order Now <FiArrowRight />{" "}
//           </button>
//         </div>
//         <div className="home-image-section">
//           {/* <img src={BannerImage} alt="" /> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import BannerBackground from "../Assets/homepage.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import "./Home.css"; // Link the CSS file
import Chatbot from "./Chatbot";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner">
        {/* Left Side: Image */}
        <div className="home-image-section">
          <img src={BannerBackground} alt="AMNS Banner" className="home-banner-image" />
        </div>

        {/* Right Side: Text */}
        <div className="home-text-section">
          <h1 className="primary-heading">COMPANY</h1>
          <p className="primary-text">
            ArcelorMittal Nippon Steel India (AM/NS India) is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease.
          </p>
          <button className="secondary-button">
            Browse Web <FiArrowRight />
            <Chatbot/>
          </button>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
