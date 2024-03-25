import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";
import DepiladitaCoverImage from "../public/project-images/depiladita-cover.png";

const projectDescriptions = {
  depiladitaEsthetic:
    "This website showcases a beauty center named Depiladita, situated in the Dominican Republic. I crafted the navigation bar and implemented various enhancements using HTML, CSS, and JavaScript",
};

export default function Home() {
  return (
    <>
      <AboutMe />
      <ProjectItem
        gitHubLink="https://github.com/Bruce-Webster-21/depiladita"
        websiteLink="https://bruce-webster-21.github.io/depiladita"
        projectTitle="DEPILADITA ESTHETIC"
        projectDescription={projectDescriptions.depiladitaEsthetic}
        projectImg={DepiladitaCoverImage}
        projectImgAlt="Depiladita website cover Image"
      />
    </>
  );
}
