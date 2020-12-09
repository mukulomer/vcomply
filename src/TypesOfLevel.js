import React, { useState } from "react";
import Sequential from "./Sequential";
import RoundRobin from "./RoundRobin";
import AnyOne from "./AnyOne";
export default function TypesOfLevel(props) {
  const [optionState, setOptionState] = useState("Types");
  const [Disable, setDisable] = useState(false);
  const handleChange = (e) => {
    setOptionState(e.target.value);
    setDisable(true);
  };
  return (
    <>
      <h3 className="type"> Choose one Type </h3>
      <select value={optionState} disabled={Disable} onChange={handleChange}>
        <option value="default">choose one</option>
        <option value="Sequential">Sequential</option>
        <option value="Round Robin">RoundRobin</option>
        <option value="Any one">AnyOne</option>
      </select>
      {optionState === "Sequential" ? (
        <Sequential
          countaccept={props.countaccept}
          countaccept={props.countaccept}
        />
      ) : optionState === "Round Robin" ? (
        <RoundRobin
          countaccept={props.countaccept}
          countaccept={props.countaccept}
        />
      ) : (
        <AnyOne
          countaccept={props.countaccept}
          countaccept={props.countaccept}
        />
      )}
    </>
  );
}
