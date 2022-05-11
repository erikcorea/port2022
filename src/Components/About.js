import React from 'react';
import '../Styling/main.css';
import { skills } from '../data.js';

function About() {
  return (
    <div className='about-container'>
      <h1>ABOUT</h1>
      <div className='about-para'>
        <p>
          Hello! I'm Erik Correa, a NYC based software engineer.(willing to relocate) I am experienced in full stack development. 
          My skills allow me to tackle complex programming problems presented on the job. 
          My love for programming stems from my passion to know how things work, how to build them, and how to fix them. 
          Contact me to get started working together!
        </p>
      </div>

      <h1 className='about-skills'>SKILLS</h1>
      <div className="skills-container">
            {skills.map((skill) => (
                <div key={skill} className="card">
                    <div className="card-body">
                        <span className="card-text">{skill}</span>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default About