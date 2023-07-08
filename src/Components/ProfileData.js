import React from "react";
import "../CSS/ProfileData.css";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileData() {
  return (
    <div className="profileContainer text-center">
      <div className="profilePhoto"></div>

      <div className="mainData mt-2">
        <div className="playerName">Susan Mary</div>
        <div className="level text-bold mt-2">
          Level: <span className="coloredText">Zonal</span>
        </div>
        <div className="playingYear">
          Playing from: <span className="coloredText">2002</span>
        </div>
      </div>

      <div className="line mt-3"></div>

      <div className="informationContainer mt-3">
        <div className="leftColumn">
          <div className="phoneNumber mt-2">
            <b>Phone No: </b>+91 8675730441
          </div>
          <div className="gender mt-2">
            <b>Gender: </b>Female
          </div>
          <div className="address mt-2">
            <b>Address:</b>
            <div className="house mt-2">
              House No. 456, Block C, Sunshine Apartments
            </div>
            <div className="area">Green Park Extension, Saket</div>
            <div className="city">New Delhi 110017, India</div>
          </div>
        </div>

        <div className="rightColumn">
          <div className="emailId mt-2">
            <b>Email Id: </b>susanmary262@gmail.com
          </div>
          <div className="dob mt-2">
            <b>DOB: </b>01/06/1992
          </div>
        </div>
      </div>

      <button type="button" className="btn editProfile mt-4">
        <FontAwesomeIcon icon={faUserEdit} className="me-2" />
        Edit Profile
      </button>
    </div>
  );
}
