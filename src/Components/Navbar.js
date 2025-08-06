// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Logo from "../Assets/amns.png";
// import { BsCart2 } from "react-icons/bs";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//     },
//     {
//       text: "Cart",
//       icon: <ShoppingCartRoundedIcon />,
//     },
//   ];
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Logo} alt="" />
//       </div>
//       <div className="navbar-links-container">
//         <a href="">Home</a>
//         <a href="">About</a>
//         <a href="">Testimonials</a>
//         <a href="">Contact</a>
//         <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a>
//         <button className="primary-button">Bookings Now</button>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar;


/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import { Link } from "react-router-dom";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, href: "#home" },
    { text: "About", icon: <InfoIcon />, href: "#about" },
    { text: "Work", icon: <CommentRoundedIcon />, href: "#work" },
    { text: "VendorRegistration", icon: <CommentRoundedIcon />, href: "#testimonial" },
    { text: "Contact", icon: <PhoneRoundedIcon />, href: "#contact" },
    { text: "Cart", icon: <ShoppingCartRoundedIcon />, href: "#cart" },
    { text: "Login", icon: <ShoppingCartRoundedIcon />, href: "#Login" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="AMNS Logo" />
      </div>

      <div className="navbar-links-container">


        <a href="#home" style={{ color: "#ffffff", textDecoration: "none" }}>Home</a>
        <a href="#about" style={{ color: "#ffffff", textDecoration: "none" }}>About</a>
        <a href="#work" style={{ color: "#ffffff", textDecoration: "none" }}>Products</a>


        <Link to="/vendor" style={{ color: "#ffffff", textDecoration: "none" }}>VendorRegistration</Link>

        {/* <a href="#testimonial">VendorRegistration</a> */}

        <Link to="/cart">
          <a href="#contact" style={{ color: "#ffffff", textDecoration: "none" }} >Contact</a>
        </Link>
        {/* <a href="#cart">
          <Link to="/vendor" className="secondary-button">Login</Link>
          <a href="#login">Login</a>
          
        </a> */}
        <Link to="/login">
        <a href="#login" style={{ color: "#ffffff", textDecoration: "none" }}>Login</a>
        </Link>
        <button  className="secondary-button"><a href="#login" style={{ color: "#ffffff", textDecoration: "none" }}>Login</a></button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

