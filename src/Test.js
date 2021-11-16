import React from "react";
import "./Test.css";

const Test = () => {
  return (
    <div className="formContent">
      <form className="form">
        <div className="formInputs">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            className="formInput"
            placeholder="Email"
          />
        </div>

        <div className="formInputs">
          <label htmlFor="password" className="formLabel">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="formInput"
          />
        </div>

        <button className="formInputBtn">Sign in</button>
      </form>
    </div>
  );
};

export default Test;
