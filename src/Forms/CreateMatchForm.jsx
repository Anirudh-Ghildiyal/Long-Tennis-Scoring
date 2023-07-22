import React, { useState } from "react";
import "../CSS/FormsCSS/CreateMatchForm.css";
import AddParticipantsModal from "../Components/AddParticipantsModal";

export default function CreateMatchForm() {
  const [selectedMatchType, setSelectedMatchType] = useState(1);
  const handleMatchTypeChange = (event) => {
    const matchType = parseInt(event.target.value);
    setSelectedMatchType(matchType);
  };

  return (
    <div className="createMatchContainer ">
      <div className="createMatchHeading text-center">
        <div className="matchText">Create Match</div>
        <div className="detailsText fst-italic">
          Get ready to play Long Tennis!
        </div>
      </div>

      <div className="createMatchline mt-4"></div>

      <form className="mt-4">
        <div className="selectGroup">
          <div className="mb-3 input">
            <label htmlFor="match" className="form-label text-white">
              Select Match Type:
            </label>
            <div className="input-group">
              <select
                className="form-select mb-3"
                aria-label=".form-select-lg example"
                value={selectedMatchType}
                onChange={handleMatchTypeChange}
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
          <button
            type="button"
            class="btn addParticipants"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Add Participants
          </button>
          <AddParticipantsModal selectedMatchType={selectedMatchType} />
        </div>
      </form>
    </div>
  );
}
