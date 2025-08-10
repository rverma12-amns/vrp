import React from "react";
import One from "../../Assets/one.png";
import two from "../../Assets/two.jpg";
import four from "../../Assets/four.png";
import "./Work.css";

const Work = () => {
  const workInfoData = [
    {
      image: One,
      title: "Steel Plant 1",
      text: "AM/NS India is a leading integrated flat carbon steel producer with ~8.5 million tons annual capacity. We offer diverse steel products including iron ore pellets. Our vendor platforms allow suppliers to access tenders, submit bids, and manage sustainability documents with ease.",
    },
    {
      image: two,
      title: "Steel Plant 2",
      text: "AM/NS India is a leading integrated flat carbon steel producer with ~8.5 million tons annual capacity. We offer diverse steel products including iron ore pellets. Our vendor platforms allow suppliers to access tenders, submit bids, and manage sustainability documents with ease.",
    },
    {
      image: four,
      title: "Steel Plant 3",
      text: "AM/NS India is a leading integrated flat carbon steel producer with ~8.5 million tons annual capacity. We offer diverse steel products including iron ore pellets. Our vendor platforms allow suppliers to access tenders, submit bids, and manage sustainability documents with ease.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          AM/NS India is a leading integrated flat carbon steel producer with ~8.5 million tons annual capacity. We offer diverse steel products including iron ore pellets. Our vendor platforms allow suppliers to access tenders, submit bids, and manage sustainability documents with ease.
        </p>
      </div> 

      <div className="work-slider-wrapper">
        <div className="work-slider">
          {workInfoData.map((data, index) => (
            <div className="work-slide" key={index}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt={data.title} />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;





