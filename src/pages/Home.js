import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  ShoppingOutlined,
  MailOutlined,
  LoginOutlined,
  LogoutOutlined,
  HeartOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import VideoBackground from "../pages/VendorRegistration";

const { Header } = Layout;

const NavBar = ({ isLoggedIn, onLogout }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <Header style={{ position: "sticky", top: 0, zIndex: 999, backgroundColor: "#001529", padding: "0 20px" }}>
        {/* 🍔 Hamburger Button for mobile */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: "#fff", fontSize: "24px" }} />}
          onClick={toggleDrawer}
          style={{ display: "none", float: "right" }}
          className="hamburger-btn"
        />

        {/* 🖥️ Desktop Menu */}
        <Menu theme="dark" mode="horizontal" selectable={false} className="desktop-menu">
          <Menu.Item key="company" icon={<AppstoreOutlined />}>
            <Link to="/company">Company</Link>
          </Menu.Item>
          <Menu.Item key="portfolio" icon={<ProfileOutlined />}>
            <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShoppingOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="csr" icon={<HeartOutlined />}>
            <Link to="/csr">CSR</Link>
          </Menu.Item>
          {isLoggedIn ? (
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <Link to="/login">Login</Link>
              <VideoBackground />
            </Menu.Item>
          )}
        </Menu>
      </Header>

      {/* 📱 Drawer for Mobile */}
      <Drawer
        title="Navigation"
        placement="right"
        closable
        onClose={toggleDrawer}
        visible={drawerVisible}
        className="mobile-drawer"
      >
        <Menu mode="vertical" onClick={toggleDrawer}>
          <Menu.Item key="company" icon={<AppstoreOutlined />}>
            <Link to="/company">Company</Link>
          </Menu.Item>
          <Menu.Item key="portfolio" icon={<ProfileOutlined />}>
            <Link to="/portfolio">Portfolio</Link>
          </Menu.Item>
          <Menu.Item key="products" icon={<ShoppingOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          <Menu.Item key="csr" icon={<HeartOutlined />}>
            <Link to="/csr">CSR</Link>
          </Menu.Item>
          {isLoggedIn ? (
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
              Logout
            </Menu.Item>
          ) : (
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </>
  );
};

export default NavBar;

