import React from 'react'
import sam from '../assets/SAM.jpg';
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${sam})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Me</h1>
        <p>
            am a software developer at credit camma with 7 years of experience  <b>

            transitioned fromm data scientist,             </b>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molesti ptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
          Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
          cumque velit
        </p>
      </div>
    </div>
  );
}

export default About;

    
    
