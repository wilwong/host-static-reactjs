import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './shared.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click link below for About page
        </p>
        <Link
          className="App-link"
          to="/about"
        >
          ABOUT
        </Link>
      </header>
    </div>
  );
}

export default App;
