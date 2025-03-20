import React, { useState } from "react";
import "./AskLuviel.css";

const AskLuviel = () => {
  const [messages, setMessages] = useState([
    { text: "Hi, I’m Luviel!", sender: "ai" },
    { text: "How can I help you?", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiResponse = { text: "I'm here to help with your skincare!", sender: "ai" };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="askluviel-container">
      {/* Chat AI Sidebar */}
      <div className="chat-sidebar">
        <button className="new-chat">+ New Chat</button>
        <div className="recent">
          <p>Recent</p>
          <ul>
            <li>Lorem Ipsum is simply dum...</li>
            <li>Need help assistance</li>
            <li>Lorem Ipsum has been the in...</li>
            <li>Letraset sheets containing Lo..</li>
          </ul>
        </div>
      </div>

      {/* Chat Area */}
      <div className="chat-area">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Ask me anything ...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSendMessage}>
            <span>&uarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskLuviel;
