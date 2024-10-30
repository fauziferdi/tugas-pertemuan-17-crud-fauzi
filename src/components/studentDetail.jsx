import React from "react";

export default function StudentDetail({ toggleModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Student Detail</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={toggleModal}
          ></button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Name : </strong> Fauzi Ferdiansyah
          </p>
          <p>
            <strong>NIM : </strong> 23324
          </p>
          <p>
            <strong>Birth Date : </strong> 111111
          </p>
          <p>
            <strong>Address : </strong>daddasdas
          </p>
          <p>
            <strong>Guardian Name : </strong>dadaadsad
          </p>
        </div>
      </div>
    </div>
  );
}
