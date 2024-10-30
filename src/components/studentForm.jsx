import React from "react";

export default function StudentForm({
  toggleModal,
  student,
  onChange,
  onSubmit,
  isEdit,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {isEdit ? "Edit Student" : "Add New Student"} Student
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => toggleModal(false)}
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name">Student Name</label>
              <input
                type="text"
                name="name"
                value={student.name}
                onChange={onChange}
                id="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nim">NIM</label>
              <input
                type="text"
                inputMode="numeric"
                name="nim"
                onChange={onChange}
                value={student.nim}
                id="nim"
                min="0"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="date"
                name="birthDate"
                id="birthDate"
                onChange={onChange}
                value={student.birthDate}
                min="0"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <textarea
                name="address"
                id="address"
                onChange={onChange}
                value={student.address}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="guardianName">Guardian Name</label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                onChange={onChange}
                value={student.guardianName}
                className="form-control"
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={onSubmit} type="button" className="btn btn-primary">
            <i className="bi bi-check2"></i> Submit
          </button>
        </div>
      </div>
    </div>
  );
}
