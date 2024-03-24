interface ProjectItemProps {
  gitHubLink: string;
  websiteLink: string;
  projectTitle: string;
  projectDescription: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  gitHubLink,
  websiteLink,
  projectTitle,
  projectDescription,
}) => {
  return (
    <div>
      <div>
        {/* <img className="cover-img" src="img/project-img/depiladita-cover.png" alt="Cover image for Depiladita Esthetic website"> */}
        <div>
          <span>
            <h2>{projectTitle}</h2>
            <div>
              <a target="_blank" href={gitHubLink}>
                {/*<img class="icon" src="img/icons/github-icon.svg" alt="GitHub icon"> */}
              </a>
              <a target="_blank" href={websiteLink}>
                {/*<img class="icon" src="img/icons/arrow-up-icon.svg" alt="Arrow up icon">*/}
              </a>
            </div>
          </span>
          {projectDescription}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
