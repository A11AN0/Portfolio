import React from 'react';
import './MyProjects.scss';

const MyProjects = (props:any) => {
  return (
    <section className="my-projects" id="projects">
            <h1 className="my-projects__title" >
                My Projects.
            </h1>
            <div className="my-projects__h-container">
              <div className="my-projects__h-container__column">
                <div className="my-projects__h-container__column__project-box"></div>
                <div className="my-projects__h-container__column__project-box"></div>
              </div>

              <div className="my-projects__h-container__column">
                <div className="my-projects__h-container__column__project-box"></div>
                <div className="my-projects__h-container__column__project-box"></div>
              </div>

              <div className="my-projects__h-container__column">
                <div className="my-projects__h-container__column__project-box"></div>
                <div className="my-projects__h-container__column__project-box"></div>
              </div>

              <div className="my-projects__h-container__column">
                <div className="my-projects__h-container__column__project-box"></div>
                <div className="my-projects__h-container__column__project-box"></div>
              </div>
              
              <div className="my-projects__h-container__column">
                <div className="my-projects__h-container__column__project-box"></div>
                <div className="my-projects__h-container__column__project-box"></div>
              </div>  
      </div>

      </section>
  )
}

export default MyProjects
