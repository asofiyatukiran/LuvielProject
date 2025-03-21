import React from "react";
import "./TextField.css"; 

const TextField = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <div className="text-field">
      {label && <label className="text-field-label">{label}</label>}
      <input
        type={type}
        className="text-field-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default TextField;
