import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-background-image">
      <div className="login-container">
        <h1 className="login-title">Welcome</h1>
        <form className="login-form">
          <div className="input-group sign-in">
            <label for="name">Full Name</label>
            <input type="text" placeholder="Name & Surname" />
          </div>
          <div className="input-group">
            <label for="email">Email</label>
            <input type="email" placeholder="Email" />
            <span className="validation-msg">Valid email</span>
          </div>
          <div className="input-group">
            <label for="emaik">Password</label>
            <input type="password" placeholder="Password" />
            <span className="validation-msg">Incorrect Password</span>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
