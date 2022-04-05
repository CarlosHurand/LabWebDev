//import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PersistentDrawerLeft } from "./Components/Pages";

function App() {
  return (
    <Router>
      <Link to="/Title"> Title </Link>
      <hr />
      <Routes>
        <Route path="/Title" element={<PersistentDrawerLeft />} />
      </Routes>
    </Router>
  );
}
export default App;