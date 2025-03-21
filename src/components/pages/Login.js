import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import backgroundImage from "../../assets/login-img1.png";
import TextField from "../TextField";
import { auth, googleProvider } from "../../firebaseConfig";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Email/Password Login Success:", userCredential.user);
      navigate("/dashboard"); // Redirect after successful login
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success:", result.user);
      navigate("/"); // Redirect after successful login
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={backgroundImage} alt="Background" className="background-image" />
      </div>

      <div className="login-right">
        <div className="login-box">
          {/* Clickable Logo */}
          <Link to="/" className="logo-link">
            <h1 className="brand-name">Luviel</h1>
          </Link>

          <h2 className="login-title">Nice to see you again</h2>

          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="login-button">Sign in</button>
          </form>

          <div className="divider"></div>

          <button className="google-button" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />
            Or sign in with Google
          </button>

          <p className="register-text">
            Don’t have an account? <a href="/sign-up">Sign up now</a>
          </p>

          <footer className="footer">
            <p>@Luviel &copy; 2025</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
