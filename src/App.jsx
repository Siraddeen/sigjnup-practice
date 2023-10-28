import { useState } from "react";
import Signupa from "./pages/signup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signupa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
