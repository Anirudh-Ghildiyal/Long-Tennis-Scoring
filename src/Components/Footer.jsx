import React from "react";
import "../CSS/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="companySection ms-5">
        <a
          href="https://www.poyntsports.com/"
          className="text-white text-decoration-none"
        >
          About Us
        </a>
        <a
          href="https://www.poyntsports.com/"
          className="text-white text-decoration-none ms-4"
        >
          Contact Us
        </a>
      </div>
      <div className="companyText">
        © 2023 Poyntsports.com, All Rights Reserved
      </div>
      <div className="me-5">
        <a href="https://www.poyntsports.com/">
          <FontAwesomeIcon icon={faFacebook} className="facebookIcon" />
        </a>
        <a href="https://www.poyntsports.com/">
          <FontAwesomeIcon icon={faYoutube} className="youtubeIcon ms-4" />
        </a>
        <a href="https://www.poyntsports.com/">
          <FontAwesomeIcon icon={faTwitter} className="twitterIcon ms-4" />
        </a>
      </div>
    </footer>
  );
}
