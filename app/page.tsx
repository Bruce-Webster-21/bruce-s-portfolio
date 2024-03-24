import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";

export default function Home() {
  return (
    <>
      <AboutMe />
      <ProjectItem
        gitHubLink="LINK"
        websiteLink="LINK"
        projectTitle="TITLE"
        projectDescription="DESCRIPTION"
      />
    </>
  );
}
