
import React from "react";
import {
  Form,
  Input,
  Upload,
  Button,
  Typography,
  Select,
  Checkbox,
  Divider,
  message
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
// import "animate.css";
import VideoBackground from "../Components/VideoBackground"; 

const { Title, Paragraph } = Typography;
const { Option } = Select;

const VendorRegistration = () => {
  const [form] = Form.useForm();

  const normFile = (e) => Array.isArray(e) ? e : e?.fileList;

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    message.success("Registration submitted successfully!");
  };

  return (
    <div
      className="animate__animated animate__fadeInUp"
      style={{
        padding: "40px",
        maxWidth: "800px",
        margin: "auto",
        background: "#fff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        borderRadius: "10px"
      }}
    >
      <Typography style={{ textAlign: "center" }}>
        <Title level={3} style={{ color: "#DC3545" }}>
          📝 Vendor Registration Portal
        </Title>
        <Paragraph>
          If you are already registered, please visit the <a href="/Login">Login Page</a>.
        </Paragraph>
        <Divider />
        <Paragraph>
          Fields marked with <span style={{ color: "red" }}>*</span> are mandatory. Only PDF or JPG/JPEG files up to 10MB are accepted.
        </Paragraph>
      </Typography>

      <Form
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
        scrollToFirstError
      >
        <Form.Item
          label="Company Name *"
          name="companyName"
          rules={[{ required: true, message: "Please enter company name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Vendor Type *"
          name="vendorType"
          rules={[{ required: true, message: "Please select vendor type" }]}
        >
          <Select placeholder="Select Vendor Type">
            <Option value="Indian">Indian</Option>
            <Option value="Foreign">Outside India</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Attach PAN Card *"
          name="panCard"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please attach PAN Card" }]}
        >
          <Upload name="panCard" beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Attach Bank Proof *"
          name="bankProof"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Upload Cheque or Bank Letter</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="MSME Status"
          name="msmeStatus"
        >
          <Select>
            <Option value="Micro">Micro</Option>
            <Option value="Small">Small</Option>
            <Option value="Medium">Medium</Option>
            <Option value="None">Not Applicable</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Attach GST Certificate / Declaration *"
          name="gstDoc"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: "Please attach GST-related document" }]}
        >
          <Upload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Upload Document</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Other Attachments"
          name="attachments"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload beforeUpload={() => false} multiple>
            <Button icon={<UploadOutlined />}>Upload PDFs/JPEGs</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="confirm" valuePropName="checked">
          <Checkbox>
            I confirm all documents are correct and follow file guidelines.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Registration
          </Button>
        </Form.Item>
      </Form>
    <VideoBackground />
    </div>
  );
};

export default VendorRegistration;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // 👈 import this
// import "./Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("admin@amns.com");
//   const [password, setPassword] = useState("Password123");

//   const navigate = useNavigate(); // 👈 initialize navigation

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const sampleEmail = "admin@amns.com";
//     const samplePassword = "Password123";

//     if (email === sampleEmail && password === samplePassword) {
//       alert("Login successful!");
//       navigate("/cart"); // 👈 go to /cart
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   const handleForgotPassword = () => {
//     alert("Redirecting to password recovery...");
//     // You could navigate to a separate page: navigate("/forgot-password");
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin} className="login-form">
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="submit">Login</button>

//         <p className="forgot-text" onClick={handleForgotPassword}>
//           Forgot Password?
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
