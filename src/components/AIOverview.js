import React from "react";
import "./AIOverview.css";
import { Button } from "./Button";
import AIRobotimage from '../assets/Luviel AI Robot.png';

function AIOverview() {
  return (
    <div className="ai-overview-container">
      <div className="ai-content"> {/* Fixed class name */}
        <h1>Ask Luviel</h1>
        <p>
          Our 24/7 Skincare AI Assistant provides instant, personalized skincare
          advice using advanced AI and dermatology research. Get quick answers
          on skin conditions, product recommendations, ingredients, and
          routines—tailored to your skin type. Simplify your skincare journey
          with expert guidance at your fingertips!
        </p>
        <div className="chat-button">
          <Button
            className='btns'
            buttonStyle='btn--chat'
            buttonSize='btn--large'
            to="/Services"
          >
            Chat Now <i className="fas fa-angle-double-right"></i>
          </Button>
        </div>
      </div>
      <div className="ai-image">
        <img src={AIRobotimage} alt="AI Robot" />
      </div>
    </div>
  );
}

export default AIOverview;
