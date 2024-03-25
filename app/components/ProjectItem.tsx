import Image from "next/image";
import { StaticImageData } from "next/image";
import projectGithubIcon from "@/public/icons/github-icon.svg";
import projectLinkIcon from "@/public/icons/arrow-up-icon.svg";

interface ProjectItemProps {
  gitHubLink: string;
  websiteLink: string;
  projectTitle: string;
  projectDescription: string;
  projectImg: StaticImageData;
  projectImgAlt: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  gitHubLink,
  websiteLink,
  projectTitle,
  projectDescription,
  projectImg,
  projectImgAlt,
}) => {
  return (
    <div>
      <div>
        <Image src={projectImg} alt={projectImgAlt} />
        <div>
          <span>
            <h2>{projectTitle}</h2>
            <div>
              <a target="_blank" href={gitHubLink}>
                <Image src={projectGithubIcon} alt="Github Icon" />
              </a>
              <a target="_blank" href={websiteLink}>
                <Image src={projectLinkIcon} alt="Link Icon" />
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
