import React from "react";
import { Link } from "react-router-dom";
import "../CSS/WelcomeText.css";

export default function WelcomeText() {
  return (
    <div className="welcomeContainer text-white text-center">
      <div className="coloredText fst-italic fs fw-bold">POYNT SPORTS: </div>
      <div className="fst-italic fs fw-bold">
        Revolutionising <span className="coloredText"> Long Tennis</span>{" "}
        Scoring
      </div>
      <div className="mt-3 thin">
        Next-Level Scoring Platform for Professionals and Amateurs Alike
      </div>
      <div className="buttonArea mt-5">
        <Link to="/signup">
          <button type="button" className="btn registerButton">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button type="button" className="btn loginButton ms-5">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
