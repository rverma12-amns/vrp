// import React from "react";
// import { Typography, Form, Input, Button } from "antd";

// const { Title } = Typography;

// const ContactUs = () => (
//   <div style={{ padding: "2rem" }}>
//     <Title>Login Us</Title>
//     <Form layout="vertical">
//       <Form.Item label="Name" name="name">
//         <Input />
//       </Form.Item>
//       <Form.Item label="Email" name="email">
//         <Input type="email" />
//       </Form.Item>
//       <Form.Item label="Message" name="message">
//         <Input.TextArea rows={4} />
//       </Form.Item>
//       <Button type="primary">Send Message</Button>
//     </Form>
//   </div>
// );

// export default ContactUs;


import React from 'react';
// import './CompanySection.css'; // Optional: include your styles

const CompanySection = () => {
  const navigationCards = [
    { href: "https://www.amns.in/leadership", label: "Leadership", valueClass: "card2-value-1" },
    { href: "https://www.amns.in/applications", label: "Applications", valueClass: "card2-value-2" },
    { href: "https://www.amns.in/marquee-projects", label: "Marquee Projects", valueClass: "card2-value-3" },
    { href: "https://www.amns.in/steel-making-process", label: "Steel Making Process", valueClass: "card2-value-4" },
    { href: "https://www.amns.in/locations", label: "Locations", valueClass: "card2-value-5" }
  ];

  const companyValues = [
    "Interdependently Safe",
    "Endlessly Creative",
    "Consistently Excellent",
    "Forever Dynamic",
    "Always Collaborative"
  ];

  return (
    <section className="company-section">

      {/* Navigation Cards */}
      <div className="item slide-12 opacity-20">
        <div className="links-card forMobileLinksCard">
          {navigationCards.map((item, index) => (
            <a key={index} href={item.href}>
              <span className="cardHeading">{item.label}</span>
              <div className={`${item.valueClass} sprite2`}></div>
              <img
                src="https://www.amns.in/assets/images/sprite/company-2/blank2.png"
                alt={`${item.label} icon`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Company Values */}
      <div className="item slide-1" id="our-values">
        <div className="company-item fifth">
          {companyValues.map((value, index) => (
            <div key={index} className={`inner-slides card-${index + 1}`}>
              <span className="text-top" data-scroll>{value}</span>
              <div className={`card-value-${index + 1} sprite-value`}></div>
              <img
                src="https://www.amns.in/assets/images/sprite/blank.png"
                alt={`${value} icon`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="slider-arrows company-slider">
        <a href="#" className="prev-arrow">
          <img src="https://www.amns.in/assets/images/icons/prev.png" alt="Previous" />
        </a>
        <a href="#" className="next-arrow">
          <img src="https://www.amns.in/assets/images/icons/next.png" alt="Next" />
        </a>
      </div>

      {/* Portfolio Section */}
      <section data-section-name="products" className="form-1" id="portfolio-lead-form-section">
        <h2 className="section-heading">Portfolio</h2>
        <div
          className="container"
          id="portfolio-lead-form-slider-wrapper"
          data-next-slide-api="https://www.amns.in/home/portfolio/next-slide"
        >
          <div className="product-slide" data-slide="1" id="productsSlide">
            <h1 className="heading-48">What product do you wish to enquire / purchase?</h1>
            <div className="products-wrapper">
              <div className="product" data-product-id="1">
                <div className="wrap-p">
                  <img
                    src="https://www.amns.in/storage/products/hot-rolled-steel.jpg"
                    alt="Hot Rolled Steel"
                  />
                  <span>Hot Rolled Steel</span>
                </div>
              </div>
              {/* 🔧 You can duplicate this div for additional products */}
            </div>
          </div>
        </div>
      </section>
      
    </section>
  );
};

export default CompanySection;
