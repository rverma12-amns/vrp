import React, { useState } from "react";
import "./ForgotPassword.css";
import VideoBackground from "../VideoBackground"; 

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <p>Enter your email and we'll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <VideoBackground/>
    </div>
  );
};

export default ForgotPassword;


