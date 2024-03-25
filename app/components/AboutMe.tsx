import Image from "next/image";
import githubIcon from "@/public/icons/github-icon.svg";
import resumeIcon from "@/public/icons/resume-icon.svg";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-3 gray-bg-color font-extralight p-4 border-transparent border-2 border-solid rounded-3xl transition duration-700 opacity-80 hover:opacity-100">
      <div className="flex justify-between">
        <div className="uppercase">
          <h1 className="text-3xl">
            bruce <span className="font-bold">webster</span>
          </h1>
          <h2 className="text-xl">
            front-end <span className="font-bold">developer</span>
          </h2>
        </div>
        <div className="flex mt-2 gap-1">
          <a href="https://github.com/Bruce-Webster-21">
            <Image src={githubIcon} width={25} alt="Github Icon" />
          </a>
          <a href="">
            <Image src={resumeIcon} width={17.5} alt="Résumé Icon" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-base text-justify">
        <p>
          Hello, I'm Bruce Webster, a Teacher and Front-end Developer fluent in
          English, Spanish, and Italian. With a diverse background in education
          and programming, I bring a unique blend of skills to my work. I
          embarked on my teaching journey in 2019, where I discovered my innate
          ability to connect with students and foster their learning. However,
          it was in 2020 that I stumbled upon the world of programming and
          instantly found my passion ignited.
        </p>
        <p>
          Starting with Python, I delved into the intricacies of web development
          and quickly found myself captivated by its limitless possibilities. As
          I immersed myself in HTML, CSS, and JavaScript, including its
          frameworks like React.
        </p>
        <p>
          I am passionate about bringing ideas to life through clean code,
          user-centric design, and efficient problem-solving. If you're looking
          to enhance your online presence, I am eager to collaborate with you.
          Whether you need a modern website, an engaging e-commerce platform, or
          a customized web application, let's work together to turn your vision
          into a reality. Please don't hesitate to reach out to me. Together, we
          can create something truly remarkable!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
