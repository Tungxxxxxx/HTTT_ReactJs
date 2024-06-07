import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../views/Login";
import Home from "../views/Home";

const RouteBase = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouteBase;
