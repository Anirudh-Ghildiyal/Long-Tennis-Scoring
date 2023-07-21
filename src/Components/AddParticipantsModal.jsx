import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../CSS/AddParticipantsModal.css";

export default function AddParticipantsModal() {
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Select Participants:
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="mb-3 text-start">
              <label htmlFor="particpant1" className="form-label">
                Search Participant 1:
              </label>
              <div className="d-flex">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="" />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    id="participant1"
                    aria-describedby="participant1"
                  />
                </div>
                <button type="button" className="btn btn-success ms-2">
                  Invite
                </button>
                <button type="button" className="btn btn-danger ms-2">
                  Remove
                </button>
              </div>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="particpant1" className="form-label">
                Search Participant 1:
              </label>
              <div className="d-flex">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="" />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    id="participant1"
                    aria-describedby="participant1"
                  />
                </div>
                <button type="button" className="btn btn-success ms-2">
                  Invite
                </button>
                <button type="button" className="btn btn-danger ms-2">
                  Remove
                </button>
              </div>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="particpant1" className="form-label">
                Search Participant 1:
              </label>
              <div className="d-flex">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="" />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    id="participant1"
                    aria-describedby="participant1"
                  />
                </div>
                <button type="button" className="btn btn-success ms-2">
                  Invite
                </button>
                <button type="button" className="btn btn-danger ms-2">
                  Remove
                </button>
              </div>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="particpant1" className="form-label">
                Search Participant 1:
              </label>
              <div className="d-flex">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} className="" />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    id="participant1"
                    aria-describedby="participant1"
                  />
                </div>
                <button type="button" className="btn btn-success ms-2">
                  Invite
                </button>
                <button type="button" className="btn btn-danger ms-2">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              style={{borderRadius: "20px"}}
            >
              Close
            </button>
            <button type="button" class="btn createMatch">
              Create Match
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
