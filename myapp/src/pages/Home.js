import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/code.avif";
 
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> SAM  project  courses</h1>
        <p> hello world react app </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
    
  );
}

export default Home;
