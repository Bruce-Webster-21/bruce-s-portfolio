import Image from "next/image";
import { StaticImageData } from "next/image";
import projectGithubIcon from "@/public/icons/github-icon.svg";
import projectLinkIcon from "@/public/icons/arrow-up-icon.svg";

interface ProjectItemProps {
  gitHubLink: string;
  websiteLink: string;
  title: string;
  description: string;
  image: StaticImageData;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  gitHubLink,
  websiteLink,
  title,
  description,
  image,
}) => {
  return (
    <div className="w-full p-4 gray-bg-color border-transparent border-2 border-solid rounded-3xl transition duration-500 opacity-80 hover:opacity-100">
      <Image
        className="rounded-t-2xl object-cover w-full"
        src={image}
        alt={title + " Website Cover Image"}
      />
      <div className="flex pt-4 flex-col gap-3">
        <span className="flex justify-between">
          <h2 className="font-semibold uppercase">{title}</h2>
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
        <div className="text-justify font-extralight text-base leading-5">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
