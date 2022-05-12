import Home from "./Home.js";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import './App.css';

function App() {
  return (
    // sets the paths of the app using react-router
    <Router>
      {/* sets where the end paths lead to */}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
