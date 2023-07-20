import React from "react";
import "../CSS/LifetimeScoreData.css";
import { Link } from "react-router-dom";

export default function LifetimeScoreData() {
  return (
    <div className="lifetimeContainer text-center">
      <div className="profilePhoto"></div>

      <div className="mainData mt-3">
        <div className="playerName">Susan Mary</div>
        <div className="subHeading mt-3">
          <div className="level">
            Level: <span className="coloredText">Zonal</span>
          </div>
          <div className="poynts ms-2">
            Poynts: <span className="coloredText">5430</span>
          </div>
        </div>

        <div className="dataLine mt-3"></div>

        <div className="mt-3 subHeading2">
          <div className="">Recently Played Match: </div>
          <div className="coloredText">The US Open Tennis Championship</div>
        </div>

        <div className="dataLine mt-3"></div>
      </div>

      <div className="mt-3">
        <b>Total Matches Played: </b>25
      </div>

      <div className="informationContainer mt-3 text-start">
        <div>
          <div className="mt-3">
            <b>Total Play Time: </b>40 hrs
          </div>
          <div className="mt-3">
            <b>Matches Won: </b>18
          </div>
          <div className="mt-3">
            <b>Average Points Scored: </b>250
          </div>
        </div>

        <div>
          <div className="mt-3">
            <b>Average Play Time: </b>20 hrs
          </div>
          <div className="mt-3">
            <b>Matches Lost: </b>7
          </div>
          <div className="mt-3">
            <b>Total Points Conceded: </b>6200
          </div>
        </div>
      </div>

      <Link to="/creatematch">
        <button type="button" className="btn createMatch mt-3">
          Create Match
        </button>
      </Link>
    </div>
  );
}
