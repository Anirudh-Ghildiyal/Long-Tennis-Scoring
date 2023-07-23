import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginHeading text-center">
        <div className="welcomeText">Welcome Back!</div>
        <div className="detailsText fst-italic">
          Please enter your details to get started
        </div>
      </div>

      <div className="loginLine mt-3"></div>

      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">
            Email Id
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faEnvelope} className="" />
            </span>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              placeholder="poyntsports@gmail.com"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-white">
            Password
          </label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <FontAwesomeIcon icon={faKey} className="" />
            </span>
            <input
              type="password"
              className="form-control col-4"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="form-check mb-3 checkArea">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label text-white"
            htmlFor="flexCheckDefault"
          >
            Remember Me
          </label>
          <div className="forgetPass">Forget Password?</div>
        </div>

        <Link to="/profile">
          <button type="submit" className="btn login mb-3">
            Login
          </button>
        </Link>

        <div className="d-flex justify-content-center">
          <Link to="/signup" className="text-white text-decoration-none">
            Don't have an account? <span className="blueText">Sign Up!</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
