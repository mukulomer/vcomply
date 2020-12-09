import React from "react";
import "./styles.css";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    value: [],
    result: "Terminated"
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/home`).then((res) => {
      const data = res.data;
      this.setState({ value: data });
    });

    this.state.value.map((data) => {
      if (data.removecount === 0) {
        this.setState({ result: "Active" });
      } else {
        this.setState({ result: "Accepted" });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="box">
          <h3 className="name">Vendor1</h3>
          <h3 className="result">{this.state.result}</h3>
        </div>
        {/* </div>
        {this.state.value.map((data) => (
          <h3>{data.result}</h3>
        ))}
      </div> */}
      </div>
    );
  }
}
