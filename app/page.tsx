import AboutMe from "./components/AboutMe";
import ProjectItem from "./components/ProjectItem";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
              key={project.id}
              gitHubLink={project.gitHubLink}
              websiteLink={project.websiteLink}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          );
        })}
        <div className="w-full min-h-96 p-4 gray-bg-color border-transparent border-2 border-solid rounded-3xl transition duration-700 opacity-80 hover:opacity-100 flex flex-col justify-center items-center text-2xl font-semibold">
          <div className="gears">
            <div className="gears-container p-10">
              <div className="gear-rotate"></div>
              <div className="gear-rotate-left"></div>
            </div>
          </div>
          <div>Coming Soon...</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
