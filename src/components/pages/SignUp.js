import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Fixed navigate import
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SignupImage from "../../assets/login-img1.png";
import { auth, googleProvider } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"; // ✅ Fixed Firebase import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // ✅ Fixed navigate definition

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Signup Success:", userCredential.user);

      toast.success("Account created successfully!", { position: "top-right", autoClose: 3000 });

      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Signup Error:", error.message);
      toast.error("Signup failed. Try again.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Signup Success:", result.user);

      toast.success("Account created successfully!", { position: "top-right", autoClose: 3000 });

      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.error("Google Signup Error:", error.message);
      toast.error("Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={SignupImage} alt="Signup Background" className="signup-image" />
      </div>

      <div className="signup-right">
        <div className="signup-box">
          <h1 className="brand-name">Luviel</h1>
          <h2 className="signup-title">Create account</h2>

          <button className="google-signup" onClick={handleGoogleSignup}>
            <FcGoogle className="google-icon" />
            Sign up with Google
          </button>

          <div className="divider"></div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group password-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <p className="password-info">Must be at least 8 characters</p>

            <button type="submit" className="signup-button">Create account</button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="footer">© Luviel 2025</p>
        </div>
      </div>
      
      {/* ✅ Fixed ToastContainer placement */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
