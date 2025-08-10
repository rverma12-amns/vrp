import VideoBackground from "../VideoBackground";
import React, { useState, useEffect } from 'react';
import { Row, Col, List, Card, Typography } from 'antd';
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
 import ContactImage from '../../Assets/homepage-joint-logo.jpg';
// import 'animate.css';
// import Chatbot from './Chatbot'; 
import Login from '../Login/Login'
import Chatbot from '../Chatbot/Chatbot';
const { Title, Text } = Typography;


const contactData = [
  {
    title: 'Vendor Management Cell',
    designation: 'Support Hours: 8.30 am to 5.30 pm IST',
    company_name: 'AM/NS test India',
    address1: '27km, Surat, Hazira Rd, Hazira',
    address2: 'Gujarat - 394270',
    address3: 'India',
    email_id: 'vrp@amns.in',
    phone_no: '7486036259',
  },
];

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible && (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '40px',
        padding: '10px 16px',
        fontSize: '16px',
        backgroundColor: '#DC3545',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        zIndex: 999,
      }}
    >
      ⬆ Top
    </button>
  );
};

export default function ContactUs() {
  return (
    <div style={{ padding: '40px', background: '#f2f6fc' }}>
      <Title
        level={3}
        className="animate__animated animate__fadeInDown"
        style={{ textAlign: 'center', color: '#e5322c' }}
      >
        Contact Us
      </Title>

      <Row gutter={[24, 24]} justify="center" className="animate__animated animate__fadeInUp animate__delay-1s">
        <Col span={24}>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={contactData}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  style={{ borderLeft: '5px solid rgb(52, 34, 33)' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <UserOutlined style={{ marginBottom: 8, fontSize: '20px', color: '#e5322c' }} />
                  <Text strong>{item.title}</Text><br />
                  <Text type="secondary">{item.designation}</Text><br /><br />
                  <EnvironmentOutlined /> {item.company_name}<br />
                  {item.address1}<br />
                  {item.address2}<br />
                  {item.address3}<br />
                  <MailOutlined /> Email: <a href={`mailto:${item.email_id}`}>{item.email_id}</a><br />
                  <PhoneOutlined /> Contact No: {item.phone_no}
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: '10px' }} className="animate__animated animate__zoomIn animate__delay-2s">
        <Col xs={24} md={16} lg={12} style={{ textAlign: 'center' }}>
          <img alt="Contact Visual" src={ContactImage} style={{paddingRight:'100px', width: '550%', borderRadius: '8px', objectFit: 'cover' }} />
        </Col>
      </Row>

      <ScrollToTopButton style={{ position: "fixed", bottom: "80px", right: "24px" }} />
   <VideoBackground/>
    <Chatbot/>
     
      
    </div>
  );
}


