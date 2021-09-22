import "./App.css";
import React from "react";

class AddEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { empName: "", empSalary: 0, deptId: 0 },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      formData: Object.assign({}, this.state.formData, { [name]: value }),
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    var url = "http://localhost:8080/addemp";
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(this.state.formData),
    })
      .then((response) => response.json())
      .then((json) =>
        alert(
          json === true
            ? "Employee Added Successfully"
            : "Couldn't Add Employee, Something went wrong"
        )
      );
  }
  render() {
    return (
      <div>
        <h3>Add Employee</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Emp Name:
            <input
              name="empName"
              type="text"
              value={this.state.formData.empName}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Salary:
            <input
              name="empSalary"
              type="number"
              value={this.state.formData.empSalary}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Dept ID:
            <input
              name="deptId"
              type="number"
              value={this.state.formData.deptId}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="Submit" name="Submit">
            Add Employee
          </button>
        </form>
      </div>
    );
  }
}

export default AddEmp;
