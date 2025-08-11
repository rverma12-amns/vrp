import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botMessage = {
      sender: "bot",
      text: getBotReply(input),
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  const handleSendQuick = (presetText) => {
    const userMessage = { sender: "user", text: presetText };
    const botMessage = {
      sender: "bot",
      text: getBotReply(presetText),
    };
    setMessages([...messages, userMessage, botMessage]);
  };

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    if (lower.includes("hello")) {
      return (
        <div>
          <p>Hi there! Visit our staging website:</p>
          <a
            href="https://staging.amns.in/mines-app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#e5322c", textDecoration: "underline" }}
          >
            Mines Portal
          </a>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Reports</li>
            <li>Analysis</li>
            <li>Excel Sheets</li>
            <li>PDF Files</li>
            <li>Website to Mines & Ores</li>
          </ul>
        </div>
      );
    }

    if (lower.includes("tell me about mines")) {
      return (
        <div>
          <p>This is our Live Dashboard:</p>
          <a
            href="https://mines.amns.in/excavator_to_msp"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#28a745", textDecoration: "underline" }}
          >
            Mines Portal Live
          </a>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Calculations</li>
            <li>GPS Tracking</li>
            <li>Daily Tracking</li>
            <li>Ore Analysis</li>
            <li>KML Analysis</li>
          </ul>
        </div>
      );
    }

    if (lower.includes("how are you")) return "I'm fine, but doing great!";
    if (lower.includes("bye")) return "Goodbye! Talk to you soon.";
    return "Sorry, I don't understand that yet.";
  };

  return (
    <div style={styles.wrapper}>
      {/* <button onClick={toggleChat} style={styles.icon}>
        🗨️
      </button> */}
      <div style={styles.wrapper}>
  <p style={{ textAlign: "center", marginBottom: "5px", fontWeight: "bold" , color:'red' }}>
    🤖 HelpBox
  </p>
  <button onClick={toggleChat} style={styles.icon}>
    🗨️
  </button>
</div>


      {isOpen && (
        <div style={styles.widget}>
          <div style={styles.header}> Chatbot</div>
          <div style={styles.chatbox}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.message,
                  textAlign: msg.sender === "user" ? "right" : "left",
                  color: msg.sender === "user" ? "#007bff" : "#28a745",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.quickActions}>
            <p style={{ marginBottom: "8px", fontWeight: "bold" }}>Quick Actions:</p>
            <div style={styles.actionGroup}>
              <button
                style={styles.actionButton}
                onClick={() => handleSendQuick("hello")}
              >
                👋 Hello
              </button>
              <button
                style={styles.actionButton}
                onClick={() => handleSendQuick("Tell me about Products")}
              >
                🗺️ About Products steel
              </button>
              <button
                style={styles.actionButton}
                onClick={() => handleSendQuick("how are you")}
              >
                😊 Status
              </button>
              <button
                style={styles.actionButton}
                onClick={() => handleSendQuick("bye")}
              >
                👋 Bye
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "10px" }}>
            <a
              href="https://staging.amns.in/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#e5322c",
                textDecoration: "underline",
                fontSize: "13px",
              }}
            >
              📃 View Terms & Conditions
            </a>
          </div>

          <input
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 9999,
  },
  icon: {
    fontSize: "30px",
    backgroundColor: "red",
    color: "red",
    border: "none",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  widget: {
    marginTop: "10px",
    width: "300px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    fontFamily: "Arial",
    overflow: "hidden",
  },
  header: {
    backgroundColor: "red",
    color: "#fff",
    padding: "12px",
    fontWeight: "bold",
    textAlign: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  chatbox: {
    padding: "12px",
    height: "200px",
    overflowY: "auto",
    backgroundColor: "#f9f9f9",
  },
  message: {
    margin: "6px 0",
    fontSize: "14px",
  },
  input: {
    borderTop: "1px solid #ddd",
    padding: "10px",
    border: "none",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
  },
  quickActions: {
    padding: "10px",
  },
  actionGroup: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
  },
  actionButton: {
    padding: "6px 12px",
    backgroundColor: "grey",
    border: "1px solid #ccc",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    transition: "all 0.2s ease-in-out",
  },
};

export default Chatbot;
