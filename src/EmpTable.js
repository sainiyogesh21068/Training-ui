import "./App.css";
import React from "react";

class EmpTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: [{}],
    };
    this.handelClick = this.handelClick.bind(this);
  }
  handelClick(event) {
    event.preventDefault();
    var url = "http://localhost:8080/getallemp";
    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({ alldata: json }));
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.handelClick}>
          Fetch All Records
        </button>
        <table border={2}>
          <thead>
            <tr>
              {Object.keys(this.state.alldata[0]).map((key, i) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.alldata.map((element, i) => {
              return (
                <tr key={i}>
                  {Object.keys(element).map((key, i) => (
                    <td key={key}>{element[key].toString()}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpTable;
