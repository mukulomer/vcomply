import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";

const RoundRobin = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [userdisable, Setuserdisable] = useState(false);
  const [disable, setDisable] = useState(false);
  // let buttonarr = [];
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleClick = (e) => {
    setCount(count + 1);
    setOpen(true);
    setDisable(false);
    e.target.style.color = "blue";
  };

  const [countaccept, setCountaccept] = useState(0);
  const [countreject, setCountreject] = useState(0);
  const [countremove, setCountremove] = useState(0);
  const handleAccept = (e) => {
    setCountaccept(countaccept + 1);
    Setuserdisable(false);
    //setDisable(true);
    e.target.style.color = "red";
  };
  const handleReject = (e) => {
    setCountreject(countreject + 1);
    props.history.push("/result");
    Setuserdisable(false);
    //setDisable(true);
    e.target.style.color = "red";
  };

  const handleRemove = (e) => {
    setCountremove(countremove + 1);
    Setuserdisable(false);
    //setDisable(true);
    e.target.style.color = "red";
  };

  let buttons;
  let buttonarr = [];
  buttons = (
    <div className="buttons">
      <button disabled={disable} onClick={handleReject}>
        {" "}
        Reject
      </button>
      <button disabled={disable} onClick={handleAccept}>
        {" "}
        Accept
      </button>
      <button disabled={disable} onClick={handleRemove}>
        {" "}
        Reject & Remove
      </button>
    </div>
  );
  for (let i = 1; i <= count; i++) {
    buttonarr.push(buttons);
  }

  const handleSubmit = () => {
    console.log(countaccept);
    if (countaccept !== 0 || countreject !== 0 || countremove !== 0) {
      const data = {
        type: "RoundRobin",
        acceptcount: countaccept,
        rejectcount: countreject,
        removecount: countremove
      };

      axios.post(`http://localhost:3000/home`, data).then((res) => {
        console.log(res);
        console.log(res.data);
      });
    }
  };
  return (
    <>
      <h1>Round Robin</h1>
      <div className="users">
        <button className="user" onClick={handleClick}>
          {" "}
          Elsa Ingram
        </button>
        <button className="user" disabled={userdisable} onClick={handleClick}>
          {" "}
          Paul Marsh
        </button>
        <button className="user" disabled={userdisable} onClick={handleClick}>
          {" "}
          Nick Holden
        </button>
        <button className="user" disabled={userdisable} onClick={handleClick}>
          {" "}
          D Joshi
        </button>
        <button className="user" disabled={userdisable} onClick={handleClick}>
          {" "}
          John
        </button>
      </div>
      <div className="buttongroup">{buttonarr}</div>
      <button className="submitbutton" onClick={handleSubmit}>
        {" "}
        Submit{" "}
      </button>
    </>
  );
};
export default RoundRobin;
