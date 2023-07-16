import React from "react";
import { Link } from "react-router-dom";
import "../CSS/FormsCSS/SignUpForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function SignUpForm() {
  return (
    <div className="signupContainer m-auto">
      <div className="signUpHeading mt-5">
        <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
        <div className="signUpHeadingText ms-3">
          <div className="createAccount">Create Account</div>
          <div className="detailsText fst-italic">
            Enter your details to get started!
          </div>
        </div>
      </div>

      <div className="signupLine mt-3"></div>

      <form className="mt-4">
        <div className="inputContainer">
          <div className="mb-3 input">
            <label htmlFor="firstName" className="form-label text-white">
              First Name
            </label>
            <input
              type="name"
              className="form-control col-4"
              id="firstName"
              placeholder="Poynt"
            />
          </div>
          <div className="mb-3 ms-3 input">
            <label htmlFor="lastName" className="form-label text-white">
              Last Name
            </label>
            <input
              type="name"
              className="form-control col-6"
              id="lastName"
              placeholder="Sports"
            />
          </div>
        </div>

        <div className="inputContainer">
          <div className="mb-3 input">
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

          <div className="mb-3 input ms-3">
            <label htmlFor="contact" className="form-label text-white">
              Contact Number
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <FontAwesomeIcon icon={faPhone} className="" />
              </span>
              <input
                type="number"
                className="form-control"
                id="contact"
                aria-describedby="contact"
                placeholder="+91 8439239472"
              />
            </div>
          </div>
        </div>

        <div className="inputContainer">
          <div className="mb-3 input">
            <label htmlFor="gender" className="form-label text-white">
              Gender
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your gender</option>
              <option id="optionSelect" value="1">
                Male
              </option>
              <option value="2">Female</option>
              <option value="3">Others</option>
            </select>
          </div>
          {/* <div className="mb-3 ms-3 input">
            <label htmlFor="dob" className="form-label text-white">
              Date of Birth
            </label>
            <div>
              <DatePicker
                isClearable
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                placeholderText="Select your Date of Birth"
              />
            </div>
          </div> */}
          <div className="mb-3 ms-3 input">
            <label htmlFor="dob" className="form-label text-white">
              Date of Birth:
            </label>
            <input
              type="date"
              className="form-control col-4"
              id="dob"
              placeholder="Enter your date of birth"
            />
          </div>
        </div>

        <div className="inputContainer">
          <div className="mb-3 input">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control col-4"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-3 ms-3 input">
            <label htmlFor="confirmPassword" className="form-label text-white">
              Confirm Password
            </label>
            <input
              type="confirmPassword"
              className="form-control col-6"
              id="confirmPassword"
              placeholder="Re-enter your password"
            />
          </div>
        </div>

        <button type="submit" className="btn m-auto submit mb-3 mt-2">
          Submit
        </button>

        <div className="d-flex justify-content-center">
          <Link to="/login" className="text-white text-decoration-none">
            Already a User? <span className="blueText">Log In!</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
