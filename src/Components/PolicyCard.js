import React, { Component } from "react";
import { BackTop } from "antd";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

class PrivacyCookiePolicy extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "40px",
          minHeight: "100vh"
        }}
      >
        <BackTop />

        <Card
          style={{
            maxWidth: "900px",
            margin: "auto",
            background: "#ffffff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            borderRadius: "10px"
          }}
          bordered={false}
        >
          <Typography>
            <Title level={3} style={{ color: "#6528ea", textAlign: "center" }}>
              PURPOSE AND APPLICATION
            </Title>

            <Paragraph style={{ fontSize: "14px", fontFamily: "HNLS" }}>
              ArcelorMittal Nippon Steel India Limited (“AM/NS test India” or
              “the Company”) has adopted a data protection policy and procedure
              (“Binding Corporate Rules”). This procedure provides a global and
              simplified legal basis for all databases and applications sharing
              Personal Data within the group. The ArcelorMittal Nippon Steel
              India Private Limited data protection procedure is a group-wide
              procedure ensuring a minimum standard of protection for Personal
              Data shared at global level.
            </Paragraph>

            <Paragraph style={{ fontSize: "14px", fontFamily: "HNLS" }}>
              This Privacy Policy explains how we collect, use, store, disclose
              and otherwise process your Personal Data obtained through this Web
              Site.
            </Paragraph>
          </Typography>
        </Card>
      </div>
    );
  }
}

export default PrivacyCookiePolicy;
