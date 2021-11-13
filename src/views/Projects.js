import { useState, useEffect } from 'react';

// utilities
import { technologies, projectData } from '../utilities/projectData';

// components
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  //// states
  // state for the projects
  const [projects, setProjects] = useState(projectData);
  // state for filtering projects
  const [selected, setSelected] = useState('');

  // useEffect to update the projects based on the selected technology
  useEffect(() => {
    setProjects(projectData);

    const projectsByTech = projectData.filter((project, i) =>
      project.technologies.includes(selected) ? { ...project } : ''
    );

    if (!selected || selected === 'All') setProjects(projectData);
    if (selected && selected !== 'All') setProjects(projectsByTech);
  }, [selected]);

  //// handlers
  // filter projects by technology
  const filterByTech = (tech) => {
    setSelected(tech);
  };

  return (
    <section className="projects section bd-container bg-grid" id="projects">
      <span className="section-subtitle">My code</span>
      <h2 className="section-title">Projects</h2>

      {/* filters by tech */}
      <div className="projects__nav">
        {technologies.map((tech, i) => (
          <div
            key={i}
            className={`projects__item ${selected === tech && 'active__item'}`}
            onClick={() => filterByTech(tech)}
          >
            {tech}
          </div>
        ))}
      </div>

      {/* projects */}
      <div className="projects__container bd-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
        {}
      </div>
    </section>
  );
};

export default Projects;
