import React, { useState } from "react";
import "./styles.css";
import TypesOfLevel from "./TypesOfLevel";
import { Redirect, Route, Switch } from "react-router-dom";
import Result from "./Result";
import { withRouter } from "react-router-dom";

export default function App(props) {
  const [level, setLevel] = useState("");
  const [value, setValue] = useState("");
  const [Disable, setDisable] = useState(false);
  let countuser = 0;
  let countaccept = 0;
  let level1 = [];
  for (let i = 1; i <= level; i++) {
    level1.push(
      <TypesOfLevel countaccept={countaccept} countaccept={countaccept} />
    );
  }

  const handleSubmit = () => {
    if (level === "") {
      alert("please Enter level first");
    }

    props.history.push("/result");

    console.log(countaccept);
  };

  const handleClick = () => {
    setLevel(value);
    setDisable(true);
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/result" component={Result} />
      </Switch>
      <label className="levels">Enter Number Of Levels </label>{" "}
      <input
        disabled={Disable}
        type="number"
        name="number"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="button" onClick={handleClick}>
        {" "}
        Click
      </button>
      <h1 className="levelname">{level}</h1>
      {level1}
      <div>
        <button className="resultButton" onClick={handleSubmit}>
          {" "}
          Check Status
        </button>
      </div>
    </div>
  );
}
