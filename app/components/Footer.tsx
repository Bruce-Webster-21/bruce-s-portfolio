import Image from "next/image";

import reactIcon from "@/public/icons/react-icon.svg";
import tailwindIcon from "@/public/icons/tailwind-icon.svg";
import typescripttIcon from "@/public/icons/typescript.svg";

const Footer = () => {
  return (
    <div className="pt-10 pb-5 font-extralight flex justify-center">
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
  );
};

export default Footer;
