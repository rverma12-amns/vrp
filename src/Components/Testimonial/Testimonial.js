import React from "react";
import ProfilePic from "../../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          ArcelorMittal Nippon Steel India (AM/NS India) is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          ArcelorMittal Nippon Steel India (AM/NS India) is a leading integrated flat carbon steel producer, with a production capacity of ~8.5 million tons per year. We offer a diversified range of steel products, including value-added steel and iron ore pellets. Through our vendor platforms, suppliers can explore tenders, submit bids, and access sustainability documentation with ease..
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>AMNS INDIA</h2>
      </div>
    </div>
  );
};

export default Testimonial;


