import React, { Component } from "react";
import StudentContainer from "./containers/StudentContainer";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">Students Data</h1>
        <StudentContainer />
      </div>
    );
  }
}
