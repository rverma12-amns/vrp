import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import VideoBackground from "../../Components/VideoBackground";

const Login = () => {
  const [email, setEmail] = useState("admin@amns.com");
  const [password, setPassword] = useState("Password123");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const sampleEmail = "admin@amns.com";
    const samplePassword = "Password123";

    if (email === sampleEmail && password === samplePassword) {
      setShowSuccessModal(true); 
    } else {
      alert("Invalid email or password");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to password recovery...");
    navigate("/forgot-password");
  };

  const handleContinue = () => {
    setShowSuccessModal(false);
    navigate("/vendor");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="forgot-text" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </form>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3> Login Successful</h3>
            <p>Welcome to VRP</p>
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      )}

      <VideoBackground />
    </div>
  );
};

export default Login;
