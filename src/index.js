import React from "react";
import ReactDOM from "react-dom";
import Data from "./Data";
import "./index.css";
import Card from "./Card";

const ncard=(val)=>{
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      links={val.links}
       ></Card>
      )
}

ReactDOM.render(
  <>
    <h1 className="heading-style"> List Of Netflix Series</h1>
    
    {  Data.map(ncard)} 
   </>,

  document.getElementById("root")
);
