import React from 'react';
import { Link } from "react-router-dom";
import './shared.css';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Now you are in the About Page
        </p>
        <p>
          Even if you are serving with ExpressJS and hit refreshed, you will not be tripped with a 404
        </p>
        <p>
          This is because ReactRouter is playing magic with the #(hash) url
        </p>
        <Link
          className="App-link"
          to="/"
        >
          BACK TO APP
        </Link>
      </header>
    </div>
  );
}

export default About;
