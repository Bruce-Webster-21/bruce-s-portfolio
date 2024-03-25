import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";
import DepiladitaCoverImage from "../public/project-images/depiladita-cover.png";

export default function Home() {
  return (
    <>
      <AboutMe />
      <ProjectItem
        gitHubLink="https://github.com/Bruce-Webster-21/depiladita"
        websiteLink="https://bruce-webster-21.github.io/depiladita"
        projectTitle="DEPILADITA ESTHETIC"
        projectDescription="DESCRIPTION"
        projectImg={DepiladitaCoverImage}
        projectImgAlt="Depiladita cover Image"
      />
    </>
  );
}
