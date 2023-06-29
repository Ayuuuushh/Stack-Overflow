import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import icon from "../../assests/stack-overflow (1).svg";
import AboutAuth from "./AboutAuth.jsx";
import "./Auth.css";
import { login, signup } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter an email and password.");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter the name to continue.");
      }
      // dispatch(signup({ name, email, password }, Navigate));
      dispatch(signup({ name, email, password }, Navigate));
    } else {
      // dispatch(login({ email, password }, Navigate));
    
      dispatch(login({ email, password},Navigate));
    }

    console.log({ name, email, password });
  };
  return (
    <section className="auth-section">
    {isSignup && <AboutAuth />}
    <div className="auth-container-2">
      <img src={icon} alt="stack overflow" className="login-logo" width='35px'/>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <label htmlFor="name">
            <h4>Display Name</h4>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
        )}
        <label htmlFor="email">
          <h4>Email</h4>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>Password</h4>
            {!isSignup && (
              <p style={{ color: "#007ac6", fontSize: "13px" }}>
                forgot password?
              </p>
            )}
          </div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="auth-btn">
          {isSignup ? "Sign up" : "Log in"}
        </button>
      </form>
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}
        <button
          type="button"
          className="handle-switch-btn"
          onClick={handleSwitch}
        >
          {isSignup ? "Log in" : "sign up"}
        </button>
      </p>
    </div>
  </section>
);
};

export default Auth;
