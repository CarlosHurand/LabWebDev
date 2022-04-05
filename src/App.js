//import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PersistentDrawerLeft } from "./Components/Pages";

function App() 
{
  //return (
    //<div className="App">
      //<header className = "App-header">
        //<img src = {logo} className = "App-logo" alt = "logo" />
        //<p>
          //Edit <code>src/App.js</code> Hola Juan Carlos.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel = "noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
  return (
    // <Router>
    //   <Link to = "/PersistentDrawerLeft"> PersistentDrawerLeft </Link>
    //   <hr />
    //   <Routes>
    //     <Route path = "/title" element = {<PersistentDrawerLeft />} />
    //   </Routes>
    // </Router>

    <div className = "App">
      <PersistentDrawerLeft />
    </div>
  );
}
export default App;