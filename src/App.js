import "./App.css";
import React from "react";
import AddEmp from "./AddEmp";
import EmpTable from "./EmpTable";
import DelEmp from "./DelEmp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "AddEmp",
    };
  }
  setoption = (event) => {
    this.setState({ action: event.target.value });
  };

  addEmployee() {}
  render() {
    var actionComponent;
    if (this.state.action === "AddEmp") {
      actionComponent = <AddEmp />;
    } else if (this.state.action === "ShowEmp") {
      actionComponent = <EmpTable />;
    } else if (this.state.action === "DelEmp") {
      actionComponent = <DelEmp />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <select name="Action" id="action" onChange={this.setoption}>
            <option value="AddEmp" selected>
              Add Emp
            </option>
            <option value="ShowEmp" selected>
              Show All Emp
            </option>
            <option value="DelEmp" selected>
              Delete Emp
            </option>
          </select>
          {actionComponent}
        </header>
      </div>
    );
  }
}

export default App;
