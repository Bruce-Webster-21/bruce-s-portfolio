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
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  gitHubLink,
  websiteLink,
  projectTitle,
  projectDescription,
  projectImg,
}) => {
  return (
    <div className="w-full p-4 gray-bg-color border-transparent border-2 border-solid rounded-3xl transition duration-700 opacity-80 hover:opacity-100">
      <Image
        className="rounded-t-2xl object-cover w-full"
        src={projectImg}
        alt={projectTitle + " Website Cover Image"}
      />
      <div className="flex pt-3 flex-col gap-3">
        <span className="flex justify-between">
          <h2 className="font-semibold uppercase">{projectTitle}</h2>
          <div className="flex gap-1">
            <a target="_blank" href={gitHubLink}>
              <Image
                width={17}
                height={17}
                src={projectGithubIcon}
                alt="Github Icon"
              />
            </a>
            <a target="_blank" href={websiteLink}>
              <Image
                width={18}
                height={18}
                src={projectLinkIcon}
                alt="Link Icon"
              />
            </a>
          </div>
        </span>
        <div className="text-justify font-extralight text-base">
          {projectDescription}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
