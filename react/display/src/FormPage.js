import React from "react";
import { useState } from "react";
import "./index.css"

const FormPage = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Submit....");
  };

  return (
    <>
      <div className="maindiv">
        <form onSubmit={onSubmits}>
          <div className="centerDiv">
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            /><br/>
            <button type="submit"> Submit</button>
          </div>
        </form>
      </div>
    </>
  );
  


};

export default FormPage;
