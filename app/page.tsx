import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";
import Header from "./components/Header";

import projects from "./projectsData";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-5 md:px-0">
      <div className="flex justify-center pb-5">
        <Header />
      </div>
      <AboutMe />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 ">
        {projects.map((project) => {
          return (
            <ProjectItem
              gitHubLink={project.gitHubLink}
              websiteLink={project.websiteLink}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}
