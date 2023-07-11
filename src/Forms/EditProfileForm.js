import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CSS/FormsCSS/EditProfileForm.css";

export default function EditProfileForm() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="profileContainer text-center">
      <div className="profilePhoto">
        <FontAwesomeIcon icon={faUserEdit} className="picUpload" />
      </div>

      <form className="mt-2">
        <input
          type="file"
          className="form-control imageUpload text-center"
          id="inputGroupFile01"
        />

        <div className="informationContainer mt-2">
          <div className="leftColumn">
            <div className="mb-2 input">
              <label htmlFor="firstName" className="form-label">
                First Name:
              </label>
              <input
                type="name"
                className="form-control col-4"
                id="firstName"
                value="Susan"
              />
            </div>

            <div className="mb-2 input">
              <label htmlFor="email" className="form-label">
                Email Id:
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
                  value="susanmary262@gmail.com"
                />
              </div>
            </div>

            <div className="mb-2 input">
              <label htmlFor="gender" className="form-label">
                Gender:
              </label>
              <select class="form-select" aria-label="Default select example">
                <option>Select your gender</option>
                <option id="optionSelect" value="1">
                  Male
                </option>
                <option selected value="2">
                  Female
                </option>
                <option value="3">Others</option>
              </select>
            </div>

            <div className="mb-2 input">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea
                className="form-control"
                id="address"
                rows="2"
                value={
                  "House No. 456, Block C, Sunshine Apartments, Green Park Extension, Saket. New Delhi 110017, India"
                }
              ></textarea>
            </div>
          </div>

          <div className="rightColumn">
            <div className="mb-2 input">
              <label htmlFor="lastName" className="form-label">
                Last Name:
              </label>
              <input
                type="name"
                className="form-control col-6"
                id="lastName"
                value="Mary"
              />
            </div>

            <div className="mb-2 input">
              <label htmlFor="contact" className="form-label">
                Contact Number:
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
                  value={8439239472}
                />
              </div>
            </div>

            <div className="mb-2 input">
              <label htmlFor="dob" className="form-label">
                Date of Birth:
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
            </div>

            <div className="mb-2 input">
              <label htmlFor="level" className="form-label">
                Level:
              </label>
              <div className="input-group">
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>Select Level:</option>
                  <option value={1}>Local</option>
                  <option selected value={2}>
                    Zonal
                  </option>
                  <option value={3}>District</option>
                  <option value={4}>State</option>
                  <option value={5}>National</option>
                  <option value={6}>International</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>

      <button type="button" className="btn save mt-1">
        Save
      </button>
      <button type="button" className="btn btn-danger ms-3 mt-1">
        Cancel
      </button>
    </div>
  );
}
