import React from 'react';
import '../App.css';

//include skills here too!
const AboutPage = () => {
    return(
        <div className="App">
        <header className="App-header">
        <p id="home">
          About Me
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    )
}

export default AboutPage;