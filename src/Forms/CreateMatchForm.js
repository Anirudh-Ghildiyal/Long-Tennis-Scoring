import React from "react";
import "../CSS/FormsCSS/CreateMatchForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CreateMatchForm() {
  return (
    <div className="container ">
      <div className="createMatchHeading text-center">
        <div className="matchText">Create Match</div>
        <div className="detailsText">Get ready to play Long Tennis!</div>
      </div>

      <div className="line mt-3"></div>

      <form className="mt-4">
        <div className="searchContainer">
          <div className="input search mb-3 ">
            <label htmlFor="search" className="form-label text-white">
              Search Participants or Referee:
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faSearch} className="input-group" />
              </span>
              <input
                id="search"
                type="text"
                className="form-control"
                aria-label="Text input with select input field"
              />
              <select
                className="form-select selectP"
                aria-label="Select input with dropdown button"
              >
                <option selected="">Search For</option>
                <option value={1}>Referee</option>
                <option value={2}>Participant</option>
              </select>
            </div>
          </div>
        </div>

        <div className="selectGroup">
          <div className="mb-3 input">
            <label htmlFor="match" className="form-label text-white">
              Select Match Type:
            </label>
            <div className="input-group">
              <select
                className="form-select mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Match Type</option>
                <option value={1}>Singles</option>
                <option value={2}>Doubles</option>
                <option value={3}>Mixed Doubles</option>
              </select>
            </div>
          </div>

          <div className="mb-3 ms-3 input">
            <label htmlFor="level" className="form-label text-white">
              Select Level:
            </label>
            <div className="input-group">
              <select
                className="form-select mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Level</option>
                <option value={1}>Local</option>
                <option value={2}>Zonal</option>
                <option value={3}>District</option>
                <option value={4}>State</option>
                <option value={5}>National</option>
                <option value={6}>International</option>
              </select>
            </div>
          </div>
        </div>

        <div className="selectGroup">
          <div className="mb-3 input">
            <label htmlFor="sets" className="form-label text-white">
              Select Number of Sets:
            </label>
            <div className="">
              <select
                className="form-select mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Number of Sets</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </select>
            </div>
          </div>

          <div className="mb-3 ms-3 input">
            <label htmlFor="points" className="form-label text-white">
              Select Winning Points:
            </label>
            <div className="input-group">
              <select
                className="form-select mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected="">Select Winning Points</option>
                <option value={1}>15</option>
                <option value={2}>17</option>
                <option value={3}>19</option>
                <option value={4}>21</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="button" className="btn createMatch mb-3">
            Create Match
          </button>
        </div>
      </form>
    </div>
  );
}
