import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";
import depiladitaCoverImage from "../public/project-images/depiladita-cover.png";
import drVictorEstrellaCoverImage from "../public/project-images/dr-victor-estrella-cover.png";
import sapienzaAcademyCoverImage from "../public/project-images/sapienza-academy-cover.png";

const projectDescriptions = {
  depiladitaEsthetic:
    "This website showcases a beauty center named Depiladita, situated in the Dominican Republic. I crafted the navigation bar and implemented various enhancements using HTML, CSS, and JavaScript",
  drVictorEstrella:
    "This website was created for a plastic surgeon, utilizing HTML, CSS, JavaScript, and a backend service named EmailJS to facilitate the sending of questionnaires via email.",
  sapienzaAcademy:
    "This website was meticulously crafted for Sapienza Academy, an educational institution. Leveraging the power of HTML, CSS, and JavaScript, I ensured a seamless and dynamic online experience.",
};

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl">
      <AboutMe />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:mt-5 md:p-0">
        <ProjectItem
          gitHubLink="https://github.com/Bruce-Webster-21/depiladita"
          websiteLink="https://bruce-webster-21.github.io/depiladita"
          projectTitle="Depiladita Esthetic"
          projectDescription={projectDescriptions.depiladitaEsthetic}
          projectImg={depiladitaCoverImage}
        />
        <ProjectItem
          gitHubLink="https://github.com/Bruce-Webster-21/victor-estrella"
          websiteLink="https://drvictorestrella.com"
          projectTitle="Dr Victor Estrella"
          projectDescription={projectDescriptions.drVictorEstrella}
          projectImg={drVictorEstrellaCoverImage}
        />
        <ProjectItem
          gitHubLink="https://github.com/Bruce-Webster-21/sapienza-academy"
          websiteLink="https://sapienzaacademy.com/"
          projectTitle="Sapienza Academy"
          projectDescription={projectDescriptions.sapienzaAcademy}
          projectImg={sapienzaAcademyCoverImage}
        />
        <ProjectItem
          gitHubLink="https://github.com/Bruce-Webster-21/depiladita"
          websiteLink="https://bruce-webster-21.github.io/depiladita"
          projectTitle="DEPILADITA ESTHETIC"
          projectDescription={projectDescriptions.depiladitaEsthetic}
          projectImg={depiladitaCoverImage}
        />
      </div>
    </div>
  );
}
