import "./App.css";
import React from "react";

class DelEmp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      alldata: [{}],
      emp_ids: [],
      id: target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    var url = "http://localhost:8080/delemp";
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: "id=" + this.state.id,
    })
      .then((response) => response.json())
      .then((json) =>
        alert(
          json === true
            ? "Employee Deleted Successfully"
            : "Couldn't Delete Employee, Something went wrong"
        )
      );
  }
  fetchIds = () => {
    var url = "http://localhost:8080/getallemp";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ alldata: json });
        var ids = [];
        this.state.alldata.map((element, i) => {
          return element.id;
        });
        this.setState({ emp_ids: ids });
      });
    console.log(this.state.emp_ids);
    console.log(this.state.alldata);
  };
  render() {
    this.fetchIds();
    return (
      <div>
        <h3>Delete Employee</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Emp ID:
            <input
              name="empId"
              type="number"
              value={this.state.id}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="Submit" name="Submit">
            Delete Employee
          </button>
        </form>
      </div>
    );
  }
}

export default DelEmp;
