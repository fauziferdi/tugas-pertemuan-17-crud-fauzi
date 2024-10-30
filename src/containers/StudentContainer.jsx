import React, { Component } from "react";
import StudentTable from "../components/studentTable";
import StudentForm from "../components/studentForm";
import StudentDetail from "../components/studentDetail";

export default class StudentContainer extends Component {
  state = {
    modalForm: false,
    modalDetail: false,
    isEdit: false,
    editedStudent: null,
    students: [
      {
        name: "Kurniawan",
        nim: "2332433",
        birthDate: "2022-02-02",
        address: "Ponorogo",
        guardianName: "Bambang",
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
      curentStudent: {
        name: "",
        nim: "",
        birthDate: "",
        address: "",
        guardianName: "",
      },
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

  handleAddOrUpdateStudent = () => {
    const { curentStudent, isEdit } = this.state;
    if (isEdit) {
      const index = this.state.editedStudent;
      const updateStudent = [...this.state.students];
      console.log(index, updateStudent);
      updateStudent[index] = curentStudent;
      this.setState({
        students: updateStudent,
      });
      this.toggleModalForm(this.state.isEdit);
    } else {
      this.setState((prevState) => ({
        students: [...prevState.students, curentStudent],
      }));
    }
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
  };

  handleEditStudent = (student, index) => {
    this.setState({
      modalForm: !this.state.modalForm,
      isEdit: true,
      curentStudent: student,
      editedStudent: index,
    });
  };

  handleDeleteStudent = (index) => {
    const data = this.state.students;
    const newStudent = data.slice(0, index).concat(data.slice(index + 1));
    this.setState({
      students: newStudent,
    });
  };

  handleInfoStudent = (student) => {
    this.setState({ curentStudent: student });
    console.log(this.state.curentStudent);
    this.toogleModalDetail();
  };

  render() {
    return (
      <>
        <StudentTable
          students={this.state.students}
          handleEditStudent={this.handleEditStudent}
          toggleModalForm={this.toggleModalForm}
          toogleModalDetail={this.toogleModalDetail}
          handleDeleteStudent={this.handleDeleteStudent}
          handleInfoStudent={this.handleInfoStudent}
        />
        {this.state.modalForm && (
          <StudentForm
            toggleModal={this.toggleModalForm}
            student={this.state.curentStudent}
            onChange={this.handleInputChange}
            isEdit={this.state.isEdit}
            onSubmit={this.handleAddOrUpdateStudent}
          />
        )}
        {this.state.modalDetail && (
          <StudentDetail
            toggleModal={this.toogleModalDetail}
            student={this.state.curentStudent}
          />
        )}
      </>
    );
  }
}
