import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";

const AnyOne = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);

  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [userdisable, setUserdisable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [countaccept, setCountaccept] = useState(0);
  const [countreject, setCountreject] = useState(0);
  const [countremove, setCountremove] = useState(0);
  let buttonarr = [];
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleClick = (e) => {
    setCount(count + 1);
    setOpen(true);
    setUserdisable(true);
    e.target.style.color = "blue";
  };

  const handleAccept = (e) => {
    setCountaccept(countaccept + 1);
    e.target.style.color = "red";
    setDisable(true);
  };
  const handleReject = (e) => {
    props.history.push("/result");
    setCountreject(countreject + 1);
    e.target.style.color = "red";
    setDisable(true);
  };

  const handleRemove = (e) => {
    setCountremove(countremove + 1);
    e.target.style.color = "red";
    setDisable(true);
  };
  const handleSubmit = () => {
    console.log(countaccept);
    if (countaccept !== 0 || countreject !== 0 || countremove !== 0) {
      const data = {
        type: "Anyone",
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

  let buttons = (
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
  return (
    <>
      <h1>Round Robin</h1>
      <div className="users">
        <button className="user" disabled={userdisable} onClick={handleClick}>
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
export default AnyOne;
