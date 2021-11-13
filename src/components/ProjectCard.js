const ProjectCard = ({
  projectName,
  description,
  achievements,
  technologies,
  category,
  img,
  gitHub,
  deployment,
}) => {
  return (
    <div className="projectsCard__content">
      <a href={deployment} target="_blank" rel="noreferrer">
        <img
          className="projectsCard__img"
          src={img}
          alt={`${projectName} screenshot`}
        />
      </a>
      <div className="projectsCard__data">
        <span className="projectsCard__subtitle">{description}</span>
        <a href={deployment} target="_blank" rel="noreferrer">
          <h2 className="projectsCard__title">{projectName}</h2>
        </a>
        <a
          className="button button-link"
          href={deployment}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button button-link"
          href={deployment}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
