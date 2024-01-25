import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/code.avif";
 
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> My project  courses</h1>
        <p> hello world react app </p>
        
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>

      <div className="skills">
         
        <h1>My Skills</h1>
  
      <ul>
        <li>Python</li>
        <li>R</li>
        <li>Machine Learning</li>
        <li>Data Science</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      </div>
      

    </div>
    
  );
}

export default Home;
