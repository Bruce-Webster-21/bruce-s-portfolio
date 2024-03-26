import Image from "next/image";

import reactIcon from "@/public/icons/react-icon.svg";
import tailwindIcon from "@/public/icons/tailwind-icon.svg";
import typescripttIcon from "@/public/icons/typescript.svg";

const Footer = () => {
  return (
    <div className="flex font-extralight flex-col pt-10 pb-5">
      <div className="flex justify-center">
        Built with React{" "}
        <Image className="ml-1" src={reactIcon} width={22} alt="React Icon" />,
        Typescript{" "}
        <Image
          className="ml-1 mr-1"
          src={typescripttIcon}
          width={22}
          alt="Typescript Icon"
        />{" "}
        & Tailwind CSS{" "}
        <Image
          className="ml-1"
          src={tailwindIcon}
          width={22}
          alt="Tailwind CSS Icon"
        />
      </div>
      <div className="flex justify-center gap-1">
        <a
          className="underline text-amber-300 font-medium"
          href="https://github.com/Bruce-Webster-21/bruce-s-portfolio"
          target="_blank"
        >
          Click Here
        </a>
        to browse code
      </div>
    </div>
  );
};

export default Footer;
