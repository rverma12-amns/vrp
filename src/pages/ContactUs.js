// import React from "react";
// import { Typography, Form, Input, Button } from "antd";

// const { Title } = Typography;

// const ContactUs = () => (
//   <div style={{ padding: "2rem" }}>
//     <Title>Contact Us</Title>
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



// TenderHeader.js
import React, { Component } from "react";
import { Row, Col, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// import withRouter from "./withRouter"; // custom wrapper
// import AmnsLogo from "./assets/AmnsLogo.png"; // Example: replace with actual path
// import homepage from "./assets/homepage.jpg"; // Example: replace with actual path

class TenderHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerVisible: false,
    };
  }

  handleClick = (e) => {
    const { navigate } = this.props;

    if (e.key === "ETender" || e.key === "EAuction") e.key = "Home";
    if (e.key === "ESG") {
      window.open(process.env.REACT_APP_PROJECT_URL + "/" + e.key, "_self");
      return;
    }

    this.setState({ drawerVisible: false });

    navigate(process.env.REACT_APP_PROJECT_URL + "/" + e.key);
    this.props.changeMenuSelection(e.key);
  };

  toggleDrawer = () => {
    this.setState((prev) => ({ drawerVisible: !prev.drawerVisible }));
  };

  render() {
    const currentPath = this.props.location.pathname;

    return (
      <div>
        <Row
          justify="space-between"
          align="middle"
          style={{ backgroundColor: "#fff", padding: "10px 20px" }}
        >
          <Col>
            <img alt="AMNS Logo" className="logo" />
          </Col>
          <Col>
            <Button
              type="text"
              icon={<MenuOutlined style={{ fontSize: "24px" }} />}
              onClick={this.toggleDrawer}
            />
          </Col>
        </Row>

        <Drawer
          title="Navigation"
          placement="left"
          closable
          onClose={this.toggleDrawer}
          visible={this.state.drawerVisible}
        >
          <Menu
            mode="vertical"
            onClick={this.handleClick}
            selectedKeys={[this.props.currentRoute]}
          >
            <Menu.Item key="Home">Home</Menu.Item>
            <Menu.Item key="VendorRegistration">Vendor Registration</Menu.Item>
            <Menu.Item key="EAuction">
              <a
                href="https://auction.amns.in/"
                target="_blank"
                rel="noreferrer"
              >
                E-Auction System
              </a>
            </Menu.Item>
            <Menu.Item key="ETender">
              <a
                href="https://sourcing.amns.in/e_tender/Logins/Vendor_Logins.aspx"
                target="_blank"
                rel="noreferrer"
              >
                E-Tender System
              </a>
            </Menu.Item>
            <Menu.Item key="ContactUs">Contact Us</Menu.Item>
            <Menu.Item key="LoginUs">Login</Menu.Item>
          </Menu>
        </Drawer>

        {["", "/", "/Home", "/Home/"].includes(
          currentPath.replace(process.env.REACT_APP_PROJECT_URL, "")
        ) ? (
          <img className="companyBackGround" alt="Background" />
        ) : (
          <h1
            style={{
              backgroundColor: "#E5322C",
              padding: "4vw",
              color: "#FFFFFF",
            }}
          >
            {/* {pageTitle[currentPath.split("/")[2]]} */}
          </h1>
        )}
      </div>
    );
  }
}

export default (TenderHeader);
