import React from 'react';
import '../Styling/main.css';
import { projects } from '../data.js';
import { SocialIcon } from 'react-social-icons';

function Projects() {
  return (
      <>
        <h1>PROJECTS</h1>
        <div className="project-cards-container">
            {projects.map((project) => (
            <div class="project-card">
                <div class="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className='project-links'>
                    <div className='link-button-container'>
                        <button className='link-button'><a className="link" href ="https://docs.google.com/document/d/1V_qwBwpUjXztFb_fDUlu3GlAA5JotlzC9aCKgcIGqzU/edit?usp=sharing">LIVE</a></button>
                    </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </>
  )
}

export default Projects