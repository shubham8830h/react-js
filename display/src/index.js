import React from "react";
import ReactDOM from "react-dom/client";
// import FormPage from "./FormPage";
import Nav from "./Nav";
import { BrowserRouter,} from "react-router-dom";

// import {BrowserRouter} from "react-router-dom"
import App from "./App";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <App></App>
    <BrowserRouter>
     <Nav/>
    </BrowserRouter>
  </>
);



