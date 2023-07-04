import React from "react";
import "../CSS/WelcomeText.css";

export default function WelcomeText() {
  return (
    <div className="container text-white text-center">
      <div className="coloredText italic fs">POYNT SPORTS: </div>
      <div className="italic fs">
        Revolutionising <span className="coloredText"> Long Tennis</span>{" "}
        Scoring
      </div>
      <div className="mt-3 thin">
        Next-Level Scoring Platform for Professionals and Amateurs Alike
      </div>
      <div className="buttonArea mt-5">
        <button type="button" className="btn register">
          Register
        </button>
        <button type="button" className="btn login ms-5">
          Login
        </button>
      </div>
    </div>
  );
}
