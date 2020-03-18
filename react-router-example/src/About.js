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
          If you are serving with ExpressJS, try refresh.
        </p>
        <p>
          You probably will see 404.
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
