import React from "react";

function App() {
  return (
    <div className="container">
      <div className="login-content">
        <div className="login-container">
          <div className="login">
            <div className="">
              <h1 className="header">Welcome back!</h1>
              <p className="subtitle">Please login to continue</p>
            </div>

            <div className="">
              <div className="form-input">
                <label htmlFor="email" className="label">
                  Email address
                </label>
                <input id="email" type="text" className="input"></input>
              </div>
              <div className="form-input">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input id="password" type="password" className="input"></input>
              </div>
              <div className="login-btn">
                <button className="button">Button Text</button>
              </div>
              <div className="forgot-password-text">forgot password?</div>
              <div className="sign-up-text">Sign up</div>
            </div>
          </div>
        </div>
        <div className="left-panel left-image">
          <div className="text-container text">
            <p>scratch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
