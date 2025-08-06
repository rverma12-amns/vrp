import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./Components/CartPage";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VideoBackground from "./Components/VideoBackground";
import Login from "./Components/Login";
import VendorRegistration from "./Components/VendorRegistration";
import ForgotPassword from "./Components/ForgotPassword";

function MainPage() {
  return (
    <>
      <VideoBackground />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="work"><Work /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="contact"><Contact /></div>
      {/* <div id="login"><Login /></div> */}
      <Footer />
    </>
  );
}

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/vendor" element={<VendorRegistration/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </div>
   
  );
}

export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import VendorRegistration from "./pages/VendorRegistration";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/contact" element={<ContactUs />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/vendor-registration" element={<VendorRegistration />} />
//     </Routes>
//   );
// }

// export default App;
