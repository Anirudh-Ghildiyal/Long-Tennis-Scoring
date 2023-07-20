import React from "react";
import "../CSS/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
    
export default function Footer() {
  return (
    <footer className="footer">
        <div className="companySection ms-5">
            <div>About Us</div>
            <div className="ms-4">Contact Us</div>
        </div>
      <div className="companyText">
        © 2023 Poyntsports.com, All Rights Reserved
      </div>
      <div className="icons me-5">
      <FontAwesomeIcon icon={faFacebook} className="facebookIcon " />
      <FontAwesomeIcon icon={faYoutube} className="youtubeIcon ms-4" />
      <FontAwesomeIcon icon={faTwitter} className="twitterIcon ms-4" />
      </div>
    </footer>
  );
}