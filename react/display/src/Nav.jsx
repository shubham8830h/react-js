import React from "react";
import Home from "./Home";
import About from "./About";
import {Routes,  Route, } from "react-router-dom";
import Contact from "./Contact";

const Nav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </>
  );
};

export default Nav;
