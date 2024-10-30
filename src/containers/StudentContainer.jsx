import React, { Component } from "react";
import StudentTable from "../components/studentTable";
import StudentForm from "../components/studentForm";
import StudentDetail from "../components/studentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedSudent: null,
    students: [
      {
        name: "Fauzi Ferdiansyah",
        nim: "2332433",
        birthDate: "16 April 2022",
        address: "Ponorogo",
        guardianName: "Marsono",
      },
    ],
    curentStudent: {
      name: "",
      nim: "",
      birthDate: "",
      address: "",
      guardianName: "",
    },
  };

  toggleModalForm = (isEdit = false) => {
    this.setState({
      isEdit,
      modalForm: !this.state.modalForm,
    });
  };

  toogleModalDetail = () => {
    this.setState({
      modalDetail: !this.state.modalDetail,
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      curentStudent: {
        ...prevState.curentStudent,
        [name]: value,
      },
    }));
    console.log(this.state.curentStudent);
  };

  handleUpdateStudent = () => {
    const { curentStudent, isEdit } = this.state;
    if (isEdit) {
      const index = this.state.editedSudent;
      const updateStudet = [...this.state.students];
    } else {
      this.setState((prevState) => ({
        students: [...prevState.students, curentStudent],
      }));
      this.setState({
        curentStudent: {
          name: "",
          nim: "",
          birthDate: "",
          address: "",
          guardianName: "",
        },
      });
      this.toggleModalForm(this.state.isEdit);
    }
  };

  handleEditStudent = (student, index) => {
    this.setState({
      modalForm: !this.state.modalForm,
      curentStudent: student,
      isEdit: true,
    });
  };

  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          handleEditStudent={this.handleEditStudent}
          toggleModalForm={this.toggleModalForm}
          toogleModalDetail={this.toogleModalDetail}
        />
        {this.state.modalForm && (
          <StudentForm
            toggleModal={this.toggleModalForm}
            student={this.state.curentStudent}
            onChange={this.handleInputChange}
            isEdit={this.state.isEdit}
            onSubmit={this.handleUpdateStudent}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail toggleModal={this.toogleModalDetail} />
        )}
      </>
    );
  }
}
