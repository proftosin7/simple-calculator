import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Calc from "./pages/Calc";
import Convert from "./pages/Convert";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Calc />}></Route>
        <Route path="/converter" element={<Convert />}></Route>
      </Routes>
    </div>
  );
}

export default App;
