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
                        <div className='link-container'>
                            <div className='github-icon-project'>
                            </div>
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