import React from "react";

export default function StudentTable({
  students,
  toggleModalForm,
  toogleModalDetail,
  handleEditStudent,
}) {
  return (
    <div className="table-responsive">
      <table className="table caption-top table-hover">
        <caption>List Of Student</caption>
        <thead>
          <tr>
            <th scope="col" className="px-3" colSpan="4">
              <button
                onClick={() => toggleModalForm(false)}
                className="btn btn-primary float-end fw-bold"
                o
              >
                <i className="bi bi-plus-circle"> Add New</i>
              </button>
            </th>
          </tr>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">NIM</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student.name}</td>
              <td>{student.nim}</td>
              <td>
                <button
                  className="btn btn-outline-success btn-sm me-2"
                  onClick={toogleModalDetail}
                >
                  <i className="bi bi-eye"></i>
                </button>
                <button
                  onClick={() => toggleModalForm(true)}
                  className="btn btn-outline-warning btn-sm me-2"
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
