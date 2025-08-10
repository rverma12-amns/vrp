import React from "react";
import AboutBackground from "../../Assets/one.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./About.css"; 

const About = () => {
  return (
    <section className="about-section-container">
     
      <div className="about-image-wrapper">
        <img src={AboutBackground} alt="About AMNS" className="about-background-image" />
      </div>

      
      <div className="about-text-wrapper">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">AMNS</h1>
        <p className="primary-text">
           ArcelorMittal Nippon Steel India (AM/NS India) is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease.
        </p>
        <p className="primary-text">
          ArcelorMittal Nippon Steel India (AM/NS India) is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
